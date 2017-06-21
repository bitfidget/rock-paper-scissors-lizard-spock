
var rps = rps || {}


// the rules of the game
// you can easily add a new waepon simply by configuring it here

rps.rules = [
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

