export const currenciesActionTypes = {
    FETCH_CURRENCIES_START: 'FETCH_CURRENCIES_START',
    FETCH_CURRENCIES_SUCCESS: 'FETCH_CURRENCIES_SUCCESS',
    FETCH_CURRENCIES_FAILURE: 'FETCH_CURRENCIES_FAILURE',
}

export interface currencyDataType {
    name: string,
    value: number
}

export interface currenciesStateType {
    currencies: null | currencyDataType[],
    isFetching: boolean,
    errorMessage: string,
    usedCurrency: string | null,
    currenciesToCheck: string[],
    amount: null | number
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