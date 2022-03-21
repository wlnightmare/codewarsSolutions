function findDifference(a, b) {
    let volume1 = 1
    let volume2 = 1
    for (let i = 0; i < a.length; i++) {
        volume1 = volume1 * a[i]
    }
    for (let j = 0; j < b.length; j++) {
        volume2 = volume2 * b[j]
    }
    return Math.abs(volume1 - volume2)
}