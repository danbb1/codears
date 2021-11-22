function charCount(str) {
  return str.split("").reduce((charCounts, currentChar) =>{
    charCounts[currentChar] = (charCounts[currentChar] || 0) + 1
    return charCounts
  }, {})
}

function scramble(str1, str2) {
  const str1Count = charCount(str1)
  const str2Count = charCount(str2)

  const str2CountKeys = Object.keys(str2Count)

  return str2CountKeys.every(char => str1Count[char] >= str2Count[char])
}

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))
console.log(scramble('scriptjava','javascript'))
