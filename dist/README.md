# Rock Paper Scissors
#### (incl. Lizard Spock extension pack)
================================================================================


Overview
--------------------------------------------------------------------------------
This is a game for 1 player vs. the computer (in this case, named Spock), where each player simultaneously opens his/her hand to display a symbol:

- Fists equals rock
- Open hand equals paper
- Showing the index and middle finger equals scissors
- Doing like a shadow puppet snake equals lizard
- Making the 'live long and prosper' sign equals Spock

The winner is determined by the following rules:

- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- (and as it always has) Rock crushes Scissors

Note: the lizard/spock bit was intended as an easter-egg, but it made the logic so much more complex so I figured it should stay in place as it would be a shame to waste...
Rules stolen from http://bigbangtheory.wikia.com/wiki/Rock_Paper_Scissors_Lizard_Spock

Player is required to sign up (via google) in order to play but is then able to play as many times as they like before exiting to the menu or signing-out.

Additionally, on winning the game, the player is able to share via a G+ post.


Technicals
--------------------------------------------------------------------------------

- Compile-able and runnable using pingy CLI
- Framework-free though JS is compiled by babel for speed
- HTML5 responsive CSS (compiled from SCSS)


Running and compiling
--------------------------------------------------------------------------------

First you will need node and npm installed - https://docs.npmjs.com/getting-started/installing-node

Then install Pingy Cli - https://github.com/pingyhq/pingy-cli

Once done, run the following commands inside this directory:

- `npm install` to save all dependencies
- `pingy dev --port 8080` to run the app locally (the port number is important for the google API)
- `pingy export` to compile and build a deployable package to the 'build' folder


What next?
--------------------------------------------------------------------------------

Of course eight hours is not long when building anything like this, so with more time it would be nice to include:

- tests (functional and unit)
- make use of local storage for game history (there is a game history saved currently, but only per session)
- wrap this up as PWA for increased speed and for offline play
- multi-player would be fun
- leaderboards
