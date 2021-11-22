function fib(n) {
  const seq = [0, 1]

  let nextX = 0
  let nextY = 1

  for (let i = 0; n > 0 ? i < n : -(i) > n; i ++) {
    seq.push(n > 0 ? nextX + nextY : nextX - nextY)
    nextX = seq[i + 1]
    nextY = seq[i + 2]
  }

  return Number.isSafeInteger(seq[Math.abs(n)])
}

console.log(fib(-96))