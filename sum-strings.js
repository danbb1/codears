function sumStrings(a,b) {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
    return (BigInt(a) + BigInt(b)).toString() 
  }
  return (Number(a) + Number(b)).toString()
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))