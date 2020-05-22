import { sortType, repoType, sortBy } from '../redux/repos/repo.types'

type elem = string | number

const compareFunctionAsc = (a: elem, b: elem): number => {
    if(typeof a === 'string' && typeof b === 'string'){
        if(a < b) return -1
        if(a === b) return 0
        if(a > b) return 1
    } else if (typeof a === 'number' && typeof b === 'number')
        return (a - b)
    return 0
}

const compareFunctionDesc = (a: elem, b: elem): number => {
    if(typeof a === 'string' && typeof b === 'string'){
        if(a < b) return 1
        if(a === b) return 0
        if(a > b) return -1
    } else if (typeof a === 'number' && typeof b === 'number')
        return (b - a)
    return 0
}

export const sortTable = (data: repoType[], type: sortType, sortByElem: sortBy): repoType[] => {
    const newData = [...data]
    
    if(type === sortType.Asc) {
        switch(sortByElem) {
            case sortBy.Id:
                newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.id, b.id))
                break;
            case sortBy.RepoTitle:
                newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.name, b.name))
                break;
            case sortBy.Owner:
                newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.owner.name, b.owner.name))
                break;
            case sortBy.Stars:
                newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.stars, b.stars))
                break;
            case sortBy.CreatedAt:
                newData.sort((a: repoType, b: repoType) => compareFunctionAsc(a.createdAt, b.createdAt))
                break;
        }
    } else {
        switch(sortByElem) {
            case sortBy.Id:
                newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.id, b.id))
                break;
            case sortBy.RepoTitle:
                newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.name, b.name))
                break;
            case sortBy.Owner:
                newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.owner.name, b.owner.name))
                break;
            case sortBy.Stars:
                newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.stars, b.stars))
                break;
            case sortBy.CreatedAt:
                newData.sort((a: repoType, b: repoType) => compareFunctionDesc(a.createdAt, b.createdAt))
                break;
        }
    }

    return newData
    
}