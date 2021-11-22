function bowlingScore(frames) {
  const framesArr = frames.split(" ")

  const prevFrameBonus = []

  const score = framesArr.reduce((total, current) => {
    
    const bonus = prevFrameBonus.pop()

    console.log("next", bonus, prevFrameBonus)
    
    if (current.match(/[/]/)) {
      prevFrameBonus.push("spare")
      return Number(total) + 10
    }
    if (current.match(/[X]/)) {
      prevFrameBonus.push("strike")
      return Number(total) + 10
    }

    const splitScore = current.split('')
    const frameScore = splitScore.reduce((total, current) => Number(total) + Number(current))

    if (prevFrameBonus.length === 0) {
      return Number(total) + Number(frameScore)
    }
  }, 0)
  
  return score
}

console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11'))
console.log(bowlingScore('X X X X X X X X X XXX'))