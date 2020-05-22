import { Dispatch } from 'redux'
import { fetchReposSuccess, fetchReposFailure } from './repo.actions'


export const fetchRepos = async (dispatch: Dispatch, name: string) => {
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${name}+in:name&per_page=100`)
        const data = await response.json()
        if(data.errors) throw Error
        const repos = data.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            owner: {
                id: item.owner.id,
                name: item.owner.login
            },
            stars: item.stargazers_count,
            createdAt: item.created_at.substr(0, 10)
        }))
        dispatch(fetchReposSuccess(repos, name))

        if(typeof Storage !== 'undefined') {
            localStorage.setItem(name, JSON.stringify(repos))
        }
    } catch(e) {
        dispatch(fetchReposFailure('Sorry, cannot fetch data! Please try again.'))
    }
}