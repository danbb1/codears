function pigIt(str) {
  const words = str.split(' ')
  return words.map(w => {
    if(w.match(/[.,\/#!$%\^&\*;?:{}=\-_`~()]/g)) return w
    return `${w.slice(1, w.length)}${w[0]}ay`
  }).join(' ')
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
