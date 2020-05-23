import { currenciesActionTypes, currenciesStateType } from './currencies.types'

export const INITIAL_STATE: currenciesStateType = {
    currencies: null,
    isFetching: false,
    errorMessage: '',
    usedCurrency: null,
    currenciesToCheck: [],
    amount: null
}

const currenciesReducer = (state = INITIAL_STATE, action: any): currenciesStateType => {
    switch (action.type) {
        case currenciesActionTypes.FETCH_CURRENCIES_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: '',
                usedCurrency: action.payload.usedCurrency,
                currenciesToCheck: action.payload.currenciesToCheck,
                amount: action.payload.amount
            }
        case currenciesActionTypes.FETCH_CURRENCIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: '',
                currencies: action.payload
            }
        case currenciesActionTypes.FETCH_CURRENCIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                usedCurrency: null,
                currenciesToCheck: [],
                currencies: null,
                amount: null
            }
        default: return state
    }
}

export default currenciesReducer