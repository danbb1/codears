function findOutlier(integers){
  const first3 = integers.splice(0, 3)
  const first3OddOrEven = first3.map(value => value % 2 ? 'odd' : 'even')
  
  if (first3OddOrEven.every(value => value === 'odd')) {
    return integers.find(value => !value % 2)
  }

  if (first3OddOrEven.every(value => value === 'even')) {
    return integers.find(value => value % 2)
  }

  const count = { even: 0, odd: 0}

  first3OddOrEven.forEach(value => value === 'odd' ? count.odd + 1 : count.even + 1)

  return count.even > count.odd ? first3.find(value => value % 2) : first3.find(value => !(value % 2))
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
