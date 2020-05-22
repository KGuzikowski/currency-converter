import { userStateType, userActionTypes } from './user.types'

export const INITIAL_STATE: userStateType = {
    isFetching: false,
    accessToken: '',
    errorMessage: '',
    user: null
}

const userReducer = (state = INITIAL_STATE, action: any): userStateType => {
    switch (action.type) {
        case userActionTypes.LOGIN_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: ''
            }
        case userActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: '',
                accessToken: action.payload.accessToken,
                user: action.payload.user
            }
        case userActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case userActionTypes.LOGOUT:
            return {
                ...state,
                accessToken: '',
                user: null
            }
        default: return state
    }
}

export default userReducer