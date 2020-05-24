// when given an array a and array b, this function returns
// an array of all elements of b that are not a part of a

export function restOf(part: string[], rest: string[]): string[] {
    return rest.filter(elem => !part.includes(elem))
}