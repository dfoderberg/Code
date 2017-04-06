/**
 * @file
 * This assignment has you extending the Game class defined in 3.1.  You'll
 * overwrite two of the functions to include a third game called, 'tanks'.
 * 
 * To do this, you'll need to author over the Game.receiveInput and 
 * Game.gameOptions functions.
 * 
 */

var Game = require(__dirname + '/../3.1-classes_as_containers.js');
Game.oldReceiveInput = Game.receiveInput;
Game.receiveInput = function(char) {
    //Game.oldReceiveInput(char);
     if (Game.currentState() ==  'gameOptions'){
                if (char == 'a') {
                    Game.enterGame('spacecraft');
                }
                else if (char == 'b') {
                    Game.enterGame('snake');
                }
                else if (char == 'c'){
                    Game.enterGame('tanks');   // when gameOptions c is called we enter the game tanks
                }
                else if (char == 'x') {
                    Game.state.pop();
                }
     }
     else     Game.oldReceiveInput(char);

    // add what code you want to replace here
}

Game.oldGameOptions = Game.gameOptions;
Game.gameOptions = function() {
        console.log('       a. spacecraft');
        console.log('       b. snake');
        console.log('       c. tanks');
        console.log('       x. back');
}

Game.initilaize();