export function not(a: string[], b: string[]): string[] {
    return a.filter((value) => b.indexOf(value) === -1)
}
  
export function intersection(a: string[], b: string[]): string[] {
    return a.filter((value) => b.indexOf(value) !== -1)
}