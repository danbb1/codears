function topThreeWords(text) {
  const strippedString = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g,"").replace(/(?<=\s)'/g).toLowerCase().trim() || null
  const uniqueWords = strippedString && strippedString !== "undefined" && strippedString.length > 0 ? Array.from(new Set(strippedString.split(/\s+/))) : null

  console.log(strippedString, uniqueWords)
  
  if (uniqueWords) {
    const top3 = []
  
    uniqueWords.forEach(word => {
      top3.sort((a, b) => b.count - a.count)
      const regEx = new RegExp(`\\b${word}\\b`, 'gi')
      const countObj = {
        word,
        count: strippedString.match(regEx).length
      }
      if (top3.length < 3) top3.push(countObj)
      if (!top3.every(el => el.count > countObj.count)) {
        top3.unshift(countObj)
        top3.pop()
      }
      })
  
    return top3.sort((a, b) => b.count === a.count ? a.word.localeCompare(b.word) : b.count - a.count).map(el => el.word)
  }

  return []
}
console.log(topThreeWords("   ...  "))
