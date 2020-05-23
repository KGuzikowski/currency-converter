export function restOf(part: string[], rest: string[]): string[] {
    return rest.filter(elem => !part.includes(elem))
}