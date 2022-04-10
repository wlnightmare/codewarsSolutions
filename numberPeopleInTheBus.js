const number = function(busStops){
  const arr = [...busStops]
  let sum1 = 0
  let sum2 = 0
  for (let i=0; i<arr.length; i++){
      sum1 +=arr[i].shift()
      sum2 +=arr[i].pop()
    
  }
  return Math.abs(sum1-sum2)
}