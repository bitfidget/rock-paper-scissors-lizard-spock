"use strict";var google={init:function(){googleDom.signedOut()},signIn:function(n){var o=n.getBasicProfile();console.log("logged in as "+o.getName()),googleDom.signedIn(o)},signOut:function(){gapi.auth2.getAuthInstance().signOut().then(function(){console.log("You have signed out."),google.init()})}},googleDom={el:document.getElementById("google-dom"),signedIn:function(n){this.el.innerHTML='\n      <button onclick="game.init();">New game</button>\n      <h3>Welcome back '+n.getName()+'</h3>\n      <img src="'+n.getImageUrl()+'"/>\n      <button onclick="google.signOut();">Sign out</button>\n    '},signedOut:function(){this.el.innerHTML="\n      <p>Please sign in to play</p>\n    "}};google.init();
//# sourceMappingURL=google.js.map