
var rps = rps || {}


// google sign in
// doesn't do too much until we need to speak to a backend
// pretty simple: sign in or sign out
// saves user.profile to the global rps object

rps.user = {

  signIn: function (googleUser) {
    this.profile = googleUser.getBasicProfile();
    rps.views.signedIn()
  },

  signOut: function () {
    let auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(function () {
      rps.views.signedOut()
    });
    delete rps.user.profile
  }
}
