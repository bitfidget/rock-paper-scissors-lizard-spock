const google = {
  init: function () {
    googleDom.signedOut()
  },
  signIn: function (googleUser) {

    let profile = googleUser.getBasicProfile();
    console.log('logged in as ' + profile.getName())

    googleDom.signedIn(profile)

  },
  signOut: function () {
    let auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(function () {
      console.log('You have signed out.')
      google.init()
    });
  }
}

const googleDom = {
  el: document.getElementById('google-dom'),
  signedIn: function (profile) {
    this.el.innerHTML =
    `
      <button onclick="game.init();">New game</button>
      <h3>Welcome back ${profile.getName()}</h3>
      <img src="${profile.getImageUrl()}"/>
      <button onclick="google.signOut();">Sign out</button>
    `
  },
  signedOut: function () {
    this.el.innerHTML =
    `
      <p>Please sign in to play</p>
    `
  }
}

google.init()




// function onFailure(error) {
//   console.log(error);
// }

// function signOut() {

// }