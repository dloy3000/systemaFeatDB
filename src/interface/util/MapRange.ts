/**
 * Creates a snap grid based on the number of 
 * refs and given start and increment values. 
 * @param ref Object array of refs or elements.
 * @param start The starting pixel position of the snap grid.
 * @param increment The pixel distance between each element. 
 * @returns 
 */
export const GetSnapGrid = (ref: any[], start: number, increment: number): number[] => {
    let grid: number[] = []

    ref!.map((refItem: any, i: number) => {
        grid.push(start + (increment * i))
    })

    return grid
}

/**
 * Maps a given value to a snap grid.
 * @param snapGrid A snap grid of fixed pixel positions.
 * @param pos The value to be mapped to the snap grid.
 * @returns 
 */
export const MapGrid = (snapGrid: number[], pos: number): number => {
    const mappedPos: number = (((snapGrid.length - 1) * (pos - snapGrid[0])) / (snapGrid[snapGrid.length - 1] - snapGrid[0]))

    return +mappedPos.toFixed(0)
}