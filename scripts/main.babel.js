
var rps = rps || {}


// compare the weapons chosen and evaluate win/lose/tie

function returnResult (me, pc) {
  if (me === pc) {
    return 'tie'
  } else {
    for (let i of me.beats) {
      if (rps.rules[i.weapon] === pc) {
        return 'win'
      }
    }
    return 'lose'
  }
}


// compare the weapons chosen and evaluate the verb the winning weapon uses

function returnVerb (me, pc) {
  if (me === pc) {
    return 'nothing'
  } else {
    for (let i of me.beats) {
      if (rps.rules[i.weapon] === pc) {
        return i.verb
      }
    }
    for (let i of pc.beats) {
      if (rps.rules[i.weapon] === me) {
        return i.verb
      }
    }
  }
}
