function findSubsetsThatAddToSum(intArray, sum) {
  return recFindSubSetsThatAddToSum(intArray, sum, intArray.length - 1, {})
}

function recFindSubSetsThatAddToSum(arr, sum, i, mem) {
  if (sum == 0) return 1
  if (sum < 0 ) return 0
  if ( i < 0 ) return 0
  else if (arr[i] > sum) { // no way to include this index
    if(mem[sum]) return mem[sum]
    mem[sum] = recFindSubSetsThatAddToSum(arr, sum, i - 1, mem)
    return mem[sum]
  } else {
    mem[sum] = recFindSubSetsThatAddToSum(arr, sum, i - 1, mem)
    mem[sum - arr[i]] = recFindSubSetsThatAddToSum(arr, sum - arr[i], i - 1, mem)
    return mem[sum] + mem[sum - arr[i]]
  }
}


console.log(findSubsetsThatAddToSum([1, 2, 3, 5, 7, 9], 10))


