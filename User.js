const ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]

const findRankIndex = (rankToFind) => ranks.findIndex(rank => rank === rankToFind )

class User {
  constructor(){
    [this.rank] = ranks
    this.progress = 0
  }

  incProgress(activityRank) {
    const userRankIndex = findRankIndex(this.rank)
    const activityRankIndex = findRankIndex(activityRank)

    if(!ranks.includes(activityRank)) throw new Error

    if (activityRankIndex === userRankIndex) this.progress += 3
    if (activityRankIndex === userRankIndex - 1) this.progress += 1
    if (activityRankIndex > userRankIndex) this.progress += 10 * ((activityRankIndex - userRankIndex) ** 2)

    const levelsToProgress = Math.floor(this.progress / 100)
    this.rank = userRankIndex + levelsToProgress < ranks.length ? ranks[userRankIndex + levelsToProgress] : 8
    this.progress = this.rank < 8 ? this.progress % 100 : 0
  }
}

const user = new User()


user.incProgress(-4)
console.log(user.rank)
console.log(user.progress)
user.incProgress(8)
console.log(user.progress)
console.log(user.rank)

