import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export type AppThunk<State, ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>