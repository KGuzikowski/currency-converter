import { restOf } from '../../utils/Form.utils'

it('restOf function works correctly', () => {
    const a = ['1', '2', '3', '4', '5']
    const b = ['1', '2', '3']
    const c = ['4', '5']
    expect(restOf(b, a)).toEqual(c)
})