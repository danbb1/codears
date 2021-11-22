function dblLinear(n) {
  const array = [1]
  let x = 0
  let y = 0
  for (let i = 0; i < n; i++ ) {
    let nextX = 2 * array[x] + 1
    let nextY = 3 * array[y] + 1

    console.log(nextX, nextY, array)

    if (nextX <= nextY) {
      array.push(nextX)
      x += 1
      if (nextX === nextY) y +=  1
    } else {
      array.push(nextY)
      y += 1
    }
  }
  return array[n]
}

console.log(dblLinear(500))