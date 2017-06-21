
var rps = rps || {}


// nice to have a history of previous games
// could use this later for leaderboards etc

rps.history = []


// the game is simple - click button, save outcome!

rps.game = {
  makeChoice: function (choice) {
    rps.history.push({
      me: rps.rules[choice],
      pc: rps.rules[Math.floor(Math.random() * rps.rules.length)]
    })
    rps.views.gameDoingStuffThatLooksLikeStuffButIsNotReallyStuff()
  }
}






