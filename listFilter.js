function filter_list(list) {
    // Return a new array with the strings filtered out
    return list.filter(item => typeof item === 'number')
}

// my first solution
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(word => !(typeof word === 'string'))
}
