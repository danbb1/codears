const RomanNumerals = new class {
  constructor () {
    this.key = {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1
    }
  }

  toRoman(decimal) {
    let str = ''

    Object.keys(this.key).forEach((roman) => {
      const q = Math.floor(decimal / this.key[roman])
      decimal -= q * this.key[roman]
      str = `${str}${roman.repeat(q)}`
    })
    return str
  }

  fromRoman(roman) {
    const arr = roman.split("")
    let decimal = 0
    arr.forEach((roman, index) => {
      if (index > 0 && this.key[arr[index-1]] < this.key[roman]) {
        decimal += this.key[roman] - (2 * this.key[arr[index-1]])
        return
      }
      decimal += this.key[roman]
    })
    return decimal
  }
}

console.log(RomanNumerals.toRoman(9))
console.log(RomanNumerals.toRoman(1991))
console.log(RomanNumerals.toRoman(2006))
console.log(RomanNumerals.toRoman(2020))

console.log(RomanNumerals.fromRoman('IX'))
console.log(RomanNumerals.fromRoman('XXI'))
console.log(RomanNumerals.fromRoman('IV'))
console.log(RomanNumerals.fromRoman('MMVII'))
console.log(RomanNumerals.fromRoman('MDCLXIX'))