function inAscOrder(arr) {
    return arr.slice(1).every((item, i) => arr[i] <= item)
}