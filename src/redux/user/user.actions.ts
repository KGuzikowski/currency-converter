import { userActionTypes, userStateType, loginStartType, loginSuccessType, loginFailureType, userType, logoutType } from './user.types'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export type AppThunk<State, ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>

const loginStart = (): loginStartType => ({
    type: userActionTypes.LOGIN_START
})

const loginSuccess = (user: userType, accessToken: string): loginSuccessType => ({
    type: userActionTypes.LOGIN_SUCCESS,
    payload: {
        user,
        accessToken
    }
})

const loginFailure = (errorMessage: string): loginFailureType => ({
    type: userActionTypes.LOGIN_FAILURE,
    payload: errorMessage
})

export const loginUserStartAsync = (code: string): ThunkAction<void, userStateType, unknown, Action<string>> => {
    return async dispatch => {
        try {
            if(!code) throw Error

            dispatch(loginStart())

            const url = `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${code}`
            const access = await fetch(url, {
                method: 'POST',
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            const { access_token } = await access.json()

            if(!access_token) throw Error

            const urlUser = `https://api.github.com/user`
            const dataUser = await fetch(urlUser, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            const user = await dataUser.json()

            if(user.error) throw Error

            dispatch(loginSuccess({ login: user.login, id: user.id }, access_token))

        } catch(error) {
            dispatch(loginFailure('Sorry, cannot log in! Please try again.'))
        }
    }
}

export const logout = (): logoutType => ({
    type: userActionTypes.LOGOUT
})