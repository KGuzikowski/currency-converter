import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import currenciesReducer from './currencies/currencies.reducer'
import extraPointsReducer from './extraPoints/extraPoints.reducer'

const reducers = {
    currencies: currenciesReducer,
    extraPoints: extraPointsReducer
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currencies', 'extraPoints']
}

const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>
export default persistReducer(persistConfig, rootReducer)