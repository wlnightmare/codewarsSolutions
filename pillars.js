function pillars(num_pill, dist, width) {
    return num_pill == 1 ? 0 : ((num_pill - 1) * (dist * 100) + (num_pill - 2) * width)
}

// my first solution ¯\_(ツ)_/¯
function pillars(num_pill, dist, width) {
    // your code here
    let result = 0;
    let distInCM = dist * 100
    if (num_pill <= 1) return 0
    if (dist > 30 && dist < 10 && width > 50 && width < 10 || (dist && width) < 0) return

    return result = distInCM * (num_pill - 1) + width * (num_pill - 2)
}