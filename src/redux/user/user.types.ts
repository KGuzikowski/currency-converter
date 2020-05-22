export type userType = {
    login: string,
    id: number
}

export interface userStateType {
    isFetching: boolean,
    accessToken: string,
    errorMessage: string,
    user: userType | null
}

export const userActionTypes = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
}

export interface loginStartType {
    type: typeof userActionTypes.LOGIN_START
}

export interface loginSuccessType {
    type: typeof userActionTypes.LOGIN_SUCCESS,
    payload: any
}

export interface loginFailureType {
    type: typeof userActionTypes.LOGIN_FAILURE,
    payload: string
}

export interface logoutType {
    type: typeof userActionTypes.LOGOUT
}
