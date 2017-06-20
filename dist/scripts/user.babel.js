const user = {
  init: function () {
    userDom.signedOut()
  },

  signIn: function (googleUser) {

    this.profile = googleUser.getBasicProfile();
    console.log('logged in as ' + this.profile.getName())

    userDom.signedIn()

  },

  signOut: function () {
    let auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(function () {
      console.log('You have signed out.')
      user.init()
    });
  }
}

const userDom = {
  signedIn: function () {
    userProfile.innerHTML =
    `
      <h6>Welcome back ${user.profile.getName()}</h6>
      <img src="${user.profile.getImageUrl()}"/>
      <button onclick="user.signOut();" class="tertiary">Sign out</button>
    `
    updateState.addCls(screen, 'signed-in')
  },

  signedOut: function () {
    userProfile.innerHTML =
    `
      <p>Please sign in to play</p>
    `
    updateState.removeCls(screen, 'signed-in')
  }
}

// it all starts here
user.init()
updateState.clearCls(screen, 'state-home')
