const rot = 13

const rotate = (utfCode, lowerLimit, upperLimit) => utfCode + rot <= upperLimit ?
    String.fromCharCode(utfCode + rot) :
    String.fromCharCode(lowerLimit + (rot - (upperLimit - utfCode + 1))) 

const encryptLetter = (char) => {
  const utfCode = char.charCodeAt(0)

  if (utfCode >= 'A'.charCodeAt(0) && utfCode <= 'Z'.charCodeAt(0)) {
    return rotate(utfCode, 'A'.charCodeAt(0), 'Z'.charCodeAt(0))
  } if (utfCode >= 'a'.charCodeAt(0) && utfCode <= 'z'.charCodeAt(0)) {
    return rotate(utfCode, 'a'.charCodeAt(0), 'z'.charCodeAt(0))
  } 
    return char
}

function rot13(message){
  let cipher

  for (let i = 0; i < message.length; i += 1) {
    cipher = `${cipher || ''}${encryptLetter(message.charAt(i), rot)}`
  }

  return cipher
}

console.log(rot13('Test'))
console.log(rot13('test'))

console.log('A'.charCodeAt(0), 'Z'.charCodeAt(0))