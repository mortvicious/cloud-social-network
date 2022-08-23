export class Sorter {
    static SortObjectsInArrByDate(array) {
        return array.sort((a,b)=>a.getTime()-b.getTime())
    }
}