const gameHistory = []

const game = {
  init: function () {
    gameDom.init()
  },

  select: function (choice) {
    let outcome = {
      me: gameChoices[choice],
      pc: gameChoices[Math.floor(Math.random() * gameChoices.length)]
    }
    gameHistory.push(outcome)
    gameDom.showResult()
  }
}

const returnResult = function (me, pc) {
  if (me === pc) {
    return 'tie'
  } else {
    for (let i of me.beats) {
      if (gameChoices[i.weapon] == pc) {
        return 'win'
      }
    }
    return 'lose'
  }
}

const returnVerb = function (me, pc) {
  if (me === pc) {
    return 'nothing'
  } else {
    for (let i of me.beats) {
      if (gameChoices[i.weapon] == pc) {
        return i.verb
      }
    }
    for (let i of pc.beats) {
      if (gameChoices[i.weapon] == me) {
        return i.verb
      }
    }
  }
}

const gameDom = {
  init: function () {
    updateState.clearCls(screen, 'state-game')
  },

  showResult: function () {
    let result = gameHistory[gameHistory.length - 1]
    let shareOptions = {
      contenturl: 'https://plus.google.com/pages/',
      calltoactionurl: 'https://plus.google.com/pages/',
      clientid: '311755866043-nqbamcbg2kb63k8oo9gpq38iu0s11b4u.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      calltoactionlabel: "START",
    }

    // print result
    let html =
    `
      <p>you chose ${result.me.name}</p>
      <p>Spock chose ${result.pc.name}</p>
      <h1>You ${returnResult(result.me, result.pc)}!</h1>

    `
    gameControl.classList.remove('share')

    // print extra info if you won or lost
    if (returnResult(result.me, result.pc) == 'win') {

      // share button only if you win
      gameControl.classList.add('share')
      shareOptions.prefilltext = 'I just beat Spock at Rock_Paper_Scissors_Lizard_Spock because ' + result.me.name + ' ' + returnVerb(result.me, result.pc) + ' ' + result.pc.name
      gapi.interactivepost.render('shareWin', shareOptions);

      html +=
      `
        <h2>${result.me.name}</h2>
        <h3>${returnVerb(result.me, result.pc)}</h3>
        <h2>${result.pc.name}</h2>
      `
    } else
    if (returnResult(result.me, result.pc) == 'lose') {
      html +=
      `
        <h2>${result.pc.name}</h2>
        <h3>${returnVerb(result.me, result.pc)}</h3>
        <h2>${result.me.name}</h2>
      `
    }
    gameResult.innerHTML = html
    screen.classList.add('result')
  }
}

// 'official' rules thanks to http://bigbangtheory.wikia.com/wiki/Rock_Paper_Scissors_Lizard_Spock
const gameChoices = [
  {
    name: "Scissors",
    beats: [
      {
        weapon: 1,
        verb: 'cuts'
      },
      {
        weapon: 3,
        verb: 'decapitates'
      }
    ]
  },
  {
    name: "Paper",
    beats: [
      {
        weapon: 2,
        verb: 'covers'
      },
      {
        weapon: 4,
        verb: 'disproves'
      }
    ]
  },
  {
    name: "Rock",
    beats: [
      {
        weapon: 3,
        verb: 'crushes'
      },
      {
        weapon: 0,
        verb: 'crushes'
      }
    ]
  },
  {
    name: "Lizard",
    beats: [
      {
        weapon: 4,
        verb: 'poisons'
      },
      {
        weapon: 1,
        verb: 'eats'
      }
    ]
  },
  {
    name: "Spock",
    beats: [
      {
        weapon: 0,
        verb: 'smashes'
      },
      {
        weapon: 2,
        verb: 'vapourises'
      }
    ]
  }
]

