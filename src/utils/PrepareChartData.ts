import { rates, rate, point } from '../redux/currencies/currencies.types'

type compareType = 1 | 0 | -1

function compare(a: point, b: point): compareType {
    if(a.x < b.x)
        return -1
    else if(a.x > b.x)
        return 1
    else return 0;
}

// this function prepares data to be in a format I want
// starting and final formats are described by typescript interfaces
export default function prepareChartData(rates: rates): rate[] {
    const final = []
    for(const curr in rates) {
        const temp: rate = {
            id: curr,
            color: 'hsl(139, 70%, 50%)',
            data: []
        }

        for(const date in rates[curr]) {
            temp.data.push({
                x: date,
                y: parseFloat(rates[curr][date])
            })
        }

        temp.data.sort(compare)
        final.push(temp)
    }

    return final
}