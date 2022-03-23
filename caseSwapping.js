function swap(str) {
    let result = ""
    for (let letter of str) {
        (letter === letter.toLowerCase()) ? result += letter.toUpperCase() : result += letter.toLowerCase()
    }
    return result
}