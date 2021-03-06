import { currenciesActionTypes, currenciesStateType } from './currencies.types'

export const INITIAL_STATE: currenciesStateType = {
    currencies: null,
    isFetching: false,
    isFetchingHistory: false,
    errorMessage: '',
    usedCurrency: null,
    currenciesToCheck: [],
    amount: null,
    history: null,
    historyError: '',
    allGraphsTogether: false
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
                currencies: action.payload,
                history: null,
                historyError: ''
            }
        case currenciesActionTypes.FETCH_CURRENCIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                usedCurrency: null,
                currenciesToCheck: [],
                currencies: null,
                amount: null,
                history: null,
            }
        case currenciesActionTypes.FETCH_HISTORY_START:
            return {
                ...state,
                isFetchingHistory: true,
                historyError: '',
                allGraphsTogether: action.payload
            }
        case currenciesActionTypes.FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                isFetchingHistory: false,
                historyError: '',
                history: action.payload
            }
        case currenciesActionTypes.FETCH_HISTORY_FAILURE:
            return {
                ...state,
                isFetchingHistory: false,
                historyError: action.payload,
                currencies: null,
                history: null,
            }
        case currenciesActionTypes.SWITCH_ALL_GRAPHS_TOGETHER:
            return {
                ...state,
                allGraphsTogether: !state.allGraphsTogether
            }
        default: return state
    }
}

export default currenciesReducer