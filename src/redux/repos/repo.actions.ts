import { repoType, reposActionTypes, fetchReposFailureType, fetchReposSuccessType, fetchReposStartType, reposStateType, sortReposType, sortBy, setPaginationType, setPageType } from './repo.types'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { fetchRepos } from './utils'

export type AppThunk<State, ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>

export const fetchReposStart = (): fetchReposStartType => ({
    type: reposActionTypes.FETCH_REPOS_START
})

export const fetchReposSuccess = (repos: repoType[], name: string): fetchReposSuccessType => ({
    type: reposActionTypes.FETCH_REPOS_SUCCESS,
    payload: { repos, name }
})

export const fetchReposFailure = (errorMessage: string): fetchReposFailureType => ({
    type: reposActionTypes.FETCH_REPOS_FAILURE,
    payload: errorMessage
})

export const fetchReposStartAsync = (name: string): ThunkAction<void, reposStateType, unknown, Action<string>> => {
    return dispatch => {
        try {
            if(!name) throw Error

            dispatch(fetchReposStart())

            if(typeof Storage !== 'undefined') {
                const data = localStorage.getItem(name)
                if(data !== null) {
                    dispatch(fetchReposSuccess(JSON.parse(data), name))
                } else fetchRepos(dispatch, name)
            } else fetchRepos(dispatch, name)

        } catch(error) {
            dispatch(fetchReposFailure('Sorry, cannot fetch data! Please try again.'))
        }
    }
}

export const sortReposDesc = (identifier: sortBy): sortReposType => ({
    type: reposActionTypes.SORT_REPOS_DESC,
    payload: identifier
})

export const sortReposAsc = (identifier: sortBy): sortReposType => ({
    type: reposActionTypes.SORT_REPOS_ASC,
    payload: identifier
})

export const setPagination = (num: number): setPaginationType => ({
    type: reposActionTypes.SET_PAGINATION,
    payload: num
})

export const setPage = (num: number): setPageType => ({
    type: reposActionTypes.SET_PAGE,
    payload: num
})