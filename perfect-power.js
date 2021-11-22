function isPP(n) {
  const max = Math.ceil(Math.sqrt(n))
  for (let i = 2; i <= max; i++) {
    for (let j = 2; j <= max; j++) {
      if (n === i ** j) return [i, j]
      if (n < i ** j) break
    }
  }
  return null
}

console.log(isPP(36))