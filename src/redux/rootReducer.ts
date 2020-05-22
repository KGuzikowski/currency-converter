import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reposReducer from './repos/repo.reducer'
import userReducer from './user/user.reducer'
import extraPointsReducer from './extraPoints/extraPoints.reducer'

const reducers = {
    repos: reposReducer,
    user: userReducer,
    extraPoints: extraPointsReducer
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['repos', 'user', 'extraPoints']
}

const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>
export default persistReducer(persistConfig, rootReducer)