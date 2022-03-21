function filterLongWords(string, n) {
    return string.split(" ").filter(word => word.length > n)
}