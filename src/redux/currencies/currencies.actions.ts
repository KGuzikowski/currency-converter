import { currenciesActionTypes, fetchCurrenciesFailureType, fetchCurrenciesStartType, fetchCurrenciesSuccessType, currencyDataType, currenciesStateType, fetchHistoryFailureType, fetchHistoryStartType, fetchHistorySuccessType, rates, historyType, switchAllGraphsTogetherType } from './currencies.types'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import prepareChartData from '../../utils/PrepareChartData'

export type AppThunk<State, ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>

export const fetchCurrenciesStart = (usedCurrency: string, currenciesToCheck: string[], amount: number): fetchCurrenciesStartType => ({
    type: currenciesActionTypes.FETCH_CURRENCIES_START,
    payload: { usedCurrency, currenciesToCheck, amount }
})

export const fetchCurrenciesSuccess = (currencies: currencyDataType[]): fetchCurrenciesSuccessType => ({
    type: currenciesActionTypes.FETCH_CURRENCIES_SUCCESS,
    payload: currencies
})

export const fetchCurrenciesFailure = (errorMessage: string): fetchCurrenciesFailureType => ({
    type: currenciesActionTypes.FETCH_CURRENCIES_FAILURE,
    payload: errorMessage
})

export const fetchCurrenciesStartAsync = (usedCurrency: string, currenciesToCheck: string[], amount: number): ThunkAction<void, currenciesStateType, unknown, Action<string>> => {
    return async dispatch => {
        try {
            if(!usedCurrency || !currenciesToCheck.length) throw Error

            dispatch(fetchCurrenciesStart(usedCurrency, currenciesToCheck, amount))
            
            let url = `https://api.exchangeratesapi.io/latest?base=${usedCurrency}&symbols=`
            currenciesToCheck.forEach(currency => {
                url += `${currency},`
            })
            const response = await fetch(url.slice(0, -1))
            const data = await response.json()

            let currencies: currencyDataType[] = []
            for(const curr in data.rates) {
                if(curr !== usedCurrency)
                    currencies.push({
                        name: curr,
                        value: data.rates[curr]
                    })
            }
            
            dispatch(fetchCurrenciesSuccess(currencies))
        } catch(e) {
            dispatch(fetchCurrenciesFailure('Sorry, cannot fetch data! Please try again.'))
        }
    }
}

export const fetchHistoryStart = (allGraphsTogether: boolean): fetchHistoryStartType => ({
    type: currenciesActionTypes.FETCH_HISTORY_START,
    payload: allGraphsTogether
})

export const fetchHistorySuccess = (data: historyType): fetchHistorySuccessType => ({
    type: currenciesActionTypes.FETCH_HISTORY_SUCCESS,
    payload: data
})

export const fetchHistoryFailure = (errorMessage: string): fetchHistoryFailureType => ({
    type: currenciesActionTypes.FETCH_HISTORY_FAILURE,
    payload: errorMessage
})

export const fetchHistoryStartAsync = (start: string, end: string, usedCurrency: string, currenciesToCheck: string[], allGraphsTogether: boolean): ThunkAction<void, currenciesStateType, unknown, Action<string>> => {
    return async dispatch => {
        try {
            if(!start || !end) throw Error

            dispatch(fetchHistoryStart(allGraphsTogether))
            
            let url = `https://api.exchangeratesapi.io/history?start_at=${start}&end_at=${end}&base=${usedCurrency}&symbols=`
            currenciesToCheck.forEach(currency => {
                url += `${currency},`
            })
            const response = await fetch(url.slice(0, -1))
            const data = await response.json()

            let ratesData: rates = {}
            currenciesToCheck.forEach(curr => {
                if(curr !== usedCurrency) ratesData[curr] = {}
            })

            for(const date in data.rates) {
                for(const curr in data.rates[date]) {
                    if(curr !== usedCurrency) {
                        ratesData[curr][date] = data.rates[date][curr]
                    }
                }
            }

            dispatch(fetchHistorySuccess({
                start: data.start_at,
                end: data.end_at,
                rates: prepareChartData(ratesData),
            }))
        } catch(e) {
            dispatch(fetchHistoryFailure('Sorry, cannot fetch data! Please try again.'))
        }
    }
}

export const switchAllGraphsTogether = (): switchAllGraphsTogetherType => ({
    type: currenciesActionTypes.SWITCH_ALL_GRAPHS_TOGETHER,
})