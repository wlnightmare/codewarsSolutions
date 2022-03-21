function animals(heads, legs) {
    //return [Chickens, Cows]
    if (heads === 0 && legs === 0) return [0, 0]
    let Cows = (legs - 2 * heads) / 2
    let Chickens = heads - Cows
    if (Chickens >= 0 && Number.isInteger(Chickens) && Cows >= 0 && Number.isInteger(Cows)) {
        return [Chickens, Cows]
    }
    return "No solutions"
}
