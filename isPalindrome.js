function isPalindrome(x) {
  let str = x.toLowerCase()
  const len = str.length
  if (len <= 1) return true
  if (str[0] !== str[len - 1]) return false
  return isPalindrome(str.substring(1, len - 1))
}