function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints)
  let avgPoints = Math.floor(classPoints.reduce((a,b)=>a+b) / classPoints.length)
  if(yourPoints > avgPoints) return true
  else return false
}