function incrementString (strng) {
  const splitStrng = strng.split('')

  if (splitStrng.findIndex(el => el ==='0') > -1) {
    const firstZeroIndex = splitStrng.findIndex(el => el === '0')
    const fullNumber = splitStrng.slice(firstZeroIndex).join('')
    const incremented = (parseInt(fullNumber, 10) + 1).toString().padStart(fullNumber.length, '0')

    return `${splitStrng.slice(0, firstZeroIndex).join('')}${incremented}`
  }

  if (splitStrng.findIndex(el => parseInt(el, 10)) > -1) {
    const firstNumberIndex = splitStrng.findIndex(el => parseInt(el, 10))
    const fullNumber = splitStrng.slice(firstNumberIndex).join('')
    const incremented = (parseInt(fullNumber, 10) + 1)

    return `${splitStrng.slice(0, firstNumberIndex).join('')}${incremented}`
  }

  return `${strng}${1}`
}

console.log(incrementString("foobar000"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar99"));
console.log(incrementString("foobar099"));
console.log(incrementString(""));
