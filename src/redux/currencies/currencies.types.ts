export const currenciesActionTypes = {
    FETCH_CURRENCIES_START: 'FETCH_CURRENCIES_START',
    FETCH_CURRENCIES_SUCCESS: 'FETCH_CURRENCIES_SUCCESS',
    FETCH_CURRENCIES_FAILURE: 'FETCH_CURRENCIES_FAILURE',
    FETCH_HISTORY_START: 'FETCH_HISTORY_START',
    FETCH_HISTORY_SUCCESS: 'FETCH_HISTORY_SUCCESS',
    FETCH_HISTORY_FAILURE: 'FETCH_HISTORY_FAILURE',
    SWITCH_ALL_GRAPHS_TOGETHER: 'SWITCH_ALL_GRAPHS_TOGETHER',
}

export interface currencyDataType {
    name: string,
    value: number
}

export interface point {
    x: string,
    y: number
}

export interface rate {
    id: string,
    color: string,
    data: point[]
}

export interface rates {
    [currency:string]: {
        [date:string]: string
    }
}

export type historyType = {
    start: string,
    end: string
    rates: rate[]
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
    isFetchingHistory: boolean,
    allGraphsTogether: boolean
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
    payload: boolean
}

export interface fetchHistorySuccessType {
    type: typeof currenciesActionTypes.FETCH_HISTORY_SUCCESS,
    payload: historyType
}

export interface fetchHistoryFailureType {
    type: typeof currenciesActionTypes.FETCH_HISTORY_FAILURE,
    payload: string
}

export interface switchAllGraphsTogetherType {
    type: typeof currenciesActionTypes.SWITCH_ALL_GRAPHS_TOGETHER
}