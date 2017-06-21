
var rps = rps || {}


// some DOM stuff I don't want to have to do twice

rps.panel = {
  main : document.getElementById('screen'),
  profile : document.getElementById('user-profile'),
  result : document.getElementById('game-result'),
  controls : document.getElementById('game-control')
}


// making room to extend the basic add/remove classes incase it's needed

rps.classes = {
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


// all the main views of the app
// could neaten this up by doing more hide/show via css or
// by using a FE framework, but it would increase the load time massively

rps.views = {
  signedIn: function () {
    rps.panel.profile.innerHTML = `
      <h6>Welcome back ${rps.user.profile.getName()}</h6>
      <img src="${rps.user.profile.getImageUrl()}"/>
      <button onclick="rps.user.signOut();" class="tertiary">Sign out</button>`
    rps.classes.addCls(rps.panel.main, 'signed-in')
  },

  signedOut: function () {
    rps.panel.profile.innerHTML = `
      <p>Please sign in to play</p>`
    rps.classes.removeCls(rps.panel.main, 'signed-in')
  },

  gameNew: function () {
    rps.classes.clearCls(rps.panel.main, 'state-game')
  },

  gameResult: function () {

    // grab the last result (we could also grab other results to relive past wins)

    let result = rps.history[rps.history.length - 1]

    // print result

    let html = `
      <p>you chose ${result.me.name}</p>
      <p>Spock chose ${result.pc.name}</p>
      <h1>You ${returnResult(result.me, result.pc)}!</h1>`

    rps.panel.controls.classList.remove('share')


    // print extra info if you won or lost

    if (returnResult(result.me, result.pc) === 'win') {

      // share button only if you win
      rps.panel.controls.classList.add('share')
      shareOptions.prefilltext = 'I just beat Spock at Rock_Paper_Scissors_Lizard_Spock because ' + result.me.name + ' ' + returnVerb(result.me, result.pc) + ' ' + result.pc.name
      gapi.interactivepost.render('social-share', shareOptions);

      html += `
        <h2>${result.me.name}</h2>
        <h3>${returnVerb(result.me, result.pc)}</h3>
        <h2>${result.pc.name}</h2>`

    } else if (returnResult(result.me, result.pc) === 'lose') {

      html += `
        <h2>${result.pc.name}</h2>
        <h3>${returnVerb(result.me, result.pc)}</h3>
        <h2>${result.me.name}</h2>`
    }

    rps.panel.result.innerHTML = html
    rps.panel.main.classList.add('result')
  }
}


// for sharing on google +

const shareOptions = {
  contenturl: 'https://plus.google.com/pages/',
  calltoactionurl: 'https://plus.google.com/pages/',
  clientid: '311755866043-nqbamcbg2kb63k8oo9gpq38iu0s11b4u.apps.googleusercontent.com',
  cookiepolicy: 'single_host_origin',
  calltoactionlabel: "START",
}


// kick off the app

rps.views.signedOut()
rps.classes.clearCls(rps.panel.main, 'state-home')