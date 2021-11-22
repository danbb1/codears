const primeFactors = n => {
  const factors = []
  let divisor = 2
  while (n > 0 ? n >= 2 : n <= -2) {
    if (n % divisor === 0) {
      if (!factors.includes(divisor)) factors.push(divisor)
      n = n / divisor
    } else {
      divisor += 1
    }
  }
  return factors
}

function sumOfDivided(lst) {
  const factors = lst.map(n => ({number: n, factors: primeFactors(n)}))
  console.log(factors)
  return factors.reduce((result, current) => {
    current.factors.forEach(factor => {
      const resultIndex = result ? result.findIndex(el => el[0] === factor) : -1
      if(resultIndex > -1) {
        result[resultIndex][1] += current.number
      } else {
        result.push([factor, current.number])
      }
    })
    return result
  }, []).sort((a,b) => a[0] - b[0]);
}

console.log(sumOfDivided([15, 21, 24, 30, -45]))