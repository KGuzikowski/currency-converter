export const currenciesActionTypes = {
    FETCH_CURRENCIES_START: 'FETCH_CURRENCIES_START',
    FETCH_CURRENCIES_SUCCESS: 'FETCH_CURRENCIES_SUCCESS',
    FETCH_CURRENCIES_FAILURE: 'FETCH_CURRENCIES_FAILURE',
    FETCH_HISTORY_START: 'FETCH_HISTORY_START',
    FETCH_HISTORY_SUCCESS: 'FETCH_HISTORY_SUCCESS',
    FETCH_HISTORY_FAILURE: 'FETCH_HISTORY_FAILURE',
}

export interface currencyDataType {
    name: string,
    value: number
}

export interface rates {
    [currency:string]: {
        [date:string]: string
    }
}

export type historyType = {
    start: string,
    end: string
    rates: rates
} | null

export interface currenciesStateType {
    currencies: null | currencyDataType[],
    isFetching: boolean,
    errorMessage: string,
    usedCurrency: string | null,
    currenciesToCheck: string[],
    amount: null | number,
    history: historyType
    historyError: string,
    isFetchingHistory: boolean
}

export interface fetchCurrenciesStartType {
    type: typeof currenciesActionTypes.FETCH_CURRENCIES_START,
    payload: {
        usedCurrency: string,
        currenciesToCheck: string[],
        amount: number
    }
}

export interface fetchCurrenciesSuccessType {
    type: typeof currenciesActionTypes.FETCH_CURRENCIES_SUCCESS,
    payload: currencyDataType[]
}

export interface fetchCurrenciesFailureType {
    type: typeof currenciesActionTypes.FETCH_CURRENCIES_FAILURE,
    payload: string
}

export interface fetchHistoryStartType {
    type: typeof currenciesActionTypes.FETCH_HISTORY_START,
    payload: {
        start: string,
        end: string
    }
}

export interface fetchHistorySuccessType {
    type: typeof currenciesActionTypes.FETCH_HISTORY_SUCCESS,
    payload: rates
}

export interface fetchHistoryFailureType {
    type: typeof currenciesActionTypes.FETCH_HISTORY_FAILURE,
    payload: string
}