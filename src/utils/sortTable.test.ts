import { sortTable } from './sortTable'
import { sortType, sortBy } from '../redux/repos/repo.types'

it('Sorts table correctly', () => {
    const data = [
        {
            id: 1,
            name: 'React',
            owner: {
                id: 1,
                name: 'facebook'
            },
            stars: 1000,
            createdAt: '2016-11-12'
        },
        {
            id: 23,
            name: 'App',
            owner: {
                id: 6,
                name: 'Karol'
            },
            stars: 200000,
            createdAt: '2016-05-12'
        },
        {
            id: 5,
            name: 'Redux',
            owner: {
                id: 8,
                name: 'somebody'
            },
            stars: 10,
            createdAt: '2011-11-12'
        }
    ]

    const sortedByIdAsc = [
        {
            id: 1,
            name: 'React',
            owner: {
                id: 1,
                name: 'facebook'
            },
            stars: 1000,
            createdAt: '2016-11-12'
        },
        {
            id: 5,
            name: 'Redux',
            owner: {
                id: 8,
                name: 'somebody'
            },
            stars: 10,
            createdAt: '2011-11-12'
        },
        {
            id: 23,
            name: 'App',
            owner: {
                id: 6,
                name: 'Karol'
            },
            stars: 200000,
            createdAt: '2016-05-12'
        }
    ]

    const sortedByDateDesc = [
        {
            id: 1,
            name: 'React',
            owner: {
                id: 1,
                name: 'facebook'
            },
            stars: 1000,
            createdAt: '2016-11-12'
        },
        {
            id: 23,
            name: 'App',
            owner: {
                id: 6,
                name: 'Karol'
            },
            stars: 200000,
            createdAt: '2016-05-12'
        },
        {
            id: 5,
            name: 'Redux',
            owner: {
                id: 8,
                name: 'somebody'
            },
            stars: 10,
            createdAt: '2011-11-12'
        }
    ]

    expect(sortTable(data, sortType.Asc, sortBy.Id)).toEqual(sortedByIdAsc)
    expect(sortTable(data, sortType.Desc, sortBy.CreatedAt)).toEqual(sortedByDateDesc)

})