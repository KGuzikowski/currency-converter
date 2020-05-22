export const reposActionTypes = {
    FETCH_REPOS_START: 'FETCH_REPOS_START',
    FETCH_REPOS_SUCCESS: 'FETCH_REPOS_SUCCESS',
    FETCH_REPOS_FAILURE: 'FETCH_REPOS_FAILURE',
    SORT_REPOS_ASC: 'SORT_REPOS_ASC',
    SORT_REPOS_DESC: 'SORT_REPOS_DESC',
    SET_PAGINATION: 'SET_PAGINATION',
    SET_PAGE: 'SET_PAGE',
}

export enum sortBy {
    Id,
    RepoTitle,
    Owner,
    Stars,
    CreatedAt
}

export enum sortType {
    Asc,
    Desc
}

export interface fetchReposStartType {
    type: typeof reposActionTypes.FETCH_REPOS_START
}

export interface fetchReposSuccessType {
    type: typeof reposActionTypes.FETCH_REPOS_SUCCESS,
    payload: { 
        repos: repoType[],
        name: string
    }
}

export interface fetchReposFailureType {
    type: typeof reposActionTypes.FETCH_REPOS_FAILURE,
    payload: string
}

interface repoOwnerType {
    id: number,
    name: string
}

export interface repoType {
    id: number,
    name: string,
    owner: repoOwnerType,
    stars: number,
    createdAt: string
}

export interface reposStateType {
    repos: null | repoType[],
    isFetching: boolean,
    errorMessage: string,
    name: string,
    pagination: number,
    page: number
}

export interface sortReposType {
    type: typeof reposActionTypes.SORT_REPOS_ASC | typeof reposActionTypes.SORT_REPOS_DESC,
    payload: sortBy
}

export interface setPaginationType {
    type: typeof reposActionTypes.SET_PAGINATION,
    payload: number
}

export interface setPageType {
    type: typeof reposActionTypes.SET_PAGE,
    payload: number
}