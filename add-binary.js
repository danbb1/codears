function toBinary(decimal) {
  const binaryArray = []
  while (decimal > 0) {
    binaryArray.unshift(`${decimal % 2}`)
    decimal = Math.floor(`${decimal / 2}`)
    console.log(binaryArray)
  }
  
  return Number(binaryArray.join(''))
}

function addBinary(a,b) {
  return toBinary(a + b)
}

console.log(toBinary(2))
console.log(addBinary(1,1))
console.log(addBinary(5,9))