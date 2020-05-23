import { currenciesActionTypes, fetchCurrenciesFailureType, fetchCurrenciesStartType, fetchCurrenciesSuccessType, currencyDataType, currenciesStateType } from './currencies.types'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

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
            console.log(data)
            // const currencies = [];
            dispatch(fetchCurrenciesSuccess([]))
        } catch(e) {
            dispatch(fetchCurrenciesFailure('Sorry, cannot fetch data! Please try again.'))
        }
    }
}