function perimeter(n) {
    let array =[]
    for(let i = 0; i < n + 1; i++) {
        i === 0 || i === 1 ? array.push(1) : array.push(array[i - 2] + array[i - 1])
    }

    return 4 * array.reduce((a, b) => a + b)
}
console.log(perimeter(5))
console.log(perimeter(0))
console.log(perimeter(7))
console.log(perimeter(20))
console.log(perimeter(30))