// function recoverSecret (triplets) {
//   let ans = []

//   triplets.forEach(triplet => {
//     if (ans.length < 3) {
//       console.log("answer empty, adding every letter")
//       return triplet.forEach(letter => ans.push(letter))
//     }
//     if (triplet.every(letter => !ans.includes(letter))) {
//       console.log("Answer doesn;t include any letters, adding to begginging")
//       return ans = [...triplet, ...ans]
//     }
//     const { letterIndexAnsOne, letterIndexAnsTwo, letterIndexAnsThree } = {
//       letterIndexAnsOne: ans.findIndex(el => el === triplet[0]),
//       letterIndexAnsTwo: ans.findIndex(el => el === triplet[1]),
//       letterIndexAnsThree: ans.findIndex(el => el === triplet[2])
//     }
//     console.log(letterIndexAnsOne, letterIndexAnsTwo, letterIndexAnsThree)
//     triplet.forEach((letter, index) => {
//       if (ans.includes(letter)) {
//         if (index === 0) {
//           if (letterIndexAnsTwo > -1 && letterIndexAnsTwo < letterIndexAnsOne) return ans.splice(letterIndexAnsTwo, 1)
//           if(letterIndexAnsThree > -1 && letterIndexAnsThree < letterIndexAnsOne) return ans.splice(letterIndexAnsThree, 1)
//         }
//         if (index === 1) {
//           if(letterIndexAnsThree > -1 && letterIndexAnsThree < letterIndexAnsOne) return ans.splice(letterIndexAnsThree, 1)
//         }
//         }
//       if (index === 0) {
//         if (letterIndexAnsTwo > -1) ans.splice(letterIndexAnsTwo, 0, letter)
//         if (letterIndexAnsThree > -1) ans.splice(letterIndexAnsThree, 0, letter)
//         return console.log("Added letter", letter, ans)
//       }  if(ans.length < 3) return ans = [...triplet]

//       if (index === 1) {
//         if (letterIndexAnsThree > -1) ans.splice(letterIndexAnsThree, 0, letter)
//         return console.log("Added letter", letter, ans)
//       }
//     })
//   })
//   console.log(ans.join(''))
// }

function removeLetterCheck(letterIndex, adjacentIndex, ans) {
  if (adjacentIndex > -1 && adjacentIndex < letterIndex) {
    console.log("letter found, removing")
    return ans.splice(letterIndex, 1)
  }

  return ans
}

function recoverSecret(triplets) {
  let ans = [];

  triplets.forEach((triplet) => {
    console.log("checking", triplet, "answer is currently", ans)
    if (ans.length < 3) {
      console.log("Answer empty, adding every letter of", triplet)
      ans = [...triplet]
      return
    };
    if (triplet.every((letter) => !ans.includes(letter))) {
      console.log("Answer contains none of triplet letters, adding all of", triplet)
      ans = [...triplet, ...ans]
      return
    };
    
    const {tripletLetterOneInAns, tripletLetterTwoInAns, tripletLetterThreeInAns} = {
      tripletLetterOneInAns: ans.findIndex(el => el === triplet[0]),
      tripletLetterTwoInAns: ans.findIndex(el => el === triplet[1]),
      tripletLetterThreeInAns: ans.findIndex(el => el === triplet[2])
    }

    triplet.forEach((letter, index) => {
      console.log(ans)
      if (ans.includes(letter)) {
        console.log("Letter", letter, "found in answer. Checking removal...")
        if (index === 0) {
          ans = removeLetterCheck(tripletLetterOneInAns, tripletLetterTwoInAns, ans)
          ans = removeLetterCheck(tripletLetterOneInAns, tripletLetterThreeInAns, ans)
        }
        if (index === 1) {
          ans = removeLetterCheck(tripletLetterTwoInAns, tripletLetterThreeInAns, ans)
        }
      } else {
        if (index === 0) {
          if (tripletLetterTwoInAns > -1) {
            ans.splice(tripletLetterTwoInAns, 0, letter)
          }
          if (tripletLetterThreeInAns > -1) {
            ans.splice(tripletLetterThreeInAns, 0, letter)
          }
        } if( index === 1) {
          if (tripletLetterThreeInAns > -1) {
            ans.splice(tripletLetterThreeInAns, 0, letter)
          }
        }
        }
    })
  });

  return ans;
}

const triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's'],
];

console.log(recoverSecret(triplets1));
