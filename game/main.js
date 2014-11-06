'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-bird-reborn');

  var BootState     = require('./states/boot');
  var MenuState     = require('./states/menu');
  var PlayState     = require('./states/play');
  var PreloadState  = require('./states/preload');
  var GameoverState = require('./states/gameover');

  // Game States
  game.state.add('boot', BootState);
  game.state.add('menu', MenuState);
  game.state.add('play', PlayState);
  game.state.add('preload', PreloadState);
  game.state.add('gameover', GameoverState);

  game.state.start('boot');
};
