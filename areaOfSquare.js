function squareArea(A) {
    // A = PI*r/2 => r = 2A/PI S = r^2
    let r = (2 * A) / Math.PI
    return +(Math.pow(r, 2)).toFixed(2)
}