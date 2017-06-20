// main wrapper
const screen = document.getElementById('screen')

// game result
const gameResult = document.getElementById('game-result')

// user section
const userProfile = document.getElementById('user-profile')

// user section
const gameControl = document.getElementById('game-control')


const updateState = {
  addCls: function (el, cls) {
    el.classList.add(cls)
  },
  removeCls: function (el, cls) {
    el.classList.remove(cls)
  },
  clearCls: function (el, cls) {
    el.classList = cls || ''
  },
  home: function () {
    screen.classList = "state-home signed-in"
  }
}

