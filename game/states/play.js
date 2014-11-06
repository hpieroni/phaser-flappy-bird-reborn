'use strict';

var Bird    = require('../prefabs/bird');
var Ground  = require('../prefabs/ground');

function Play() {}

Play.prototype = {
  create: function() {
    var centerY = this.game.height/2;

    // enable physics and settig gravity
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 500;

    // add the background sprite
    this.background = this.game.add.sprite(0,0,'background');

    // Create and add a new bird object
    this.bird = new Bird(this.game, 100, centerY);
    this.game.add.existing(this.bird);

    // create and add a new Ground object
    this.ground = new Ground(this.game, 0, 400, 335, 112);
    this.game.add.existing(this.ground);
  },
  update: function() {
    this.game.physics.arcade.collide(this.bird, this.ground);
  }
};

module.exports = Play;
