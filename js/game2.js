;
(function() {
   var Game = function(canvasId) {
      var canvas = document.getElementById(canvasId);
      var screen = canvas.getContext('2d');
      var gameSize = {
         x: canvas.width,
         y: canvas.height
      };
      var self = this;
      // All the entities in the game
      this.bodies = createInvaders(this).concat(new Player(this, gameSize));
      // Game logic
      var tick = function() {
         self.update();
         self.draw(screen, gameSize);
         //Run the game logic ~60 times a second
         requestAnimationFrame(tick);
      };
      tick();
   };
   Game.prototype = {
      update: function() {
         var bodies = this.bodies;
         var notCollidingWithAnything = function(b1) {
            return bodies.filter(function(b2) {
               return colliding(b1, b2);
            }).length === 0;
         };
         this.bodies = this.bodies.filter(notCollidingWithAnything);
         for(var i = 0; i < this.bodies.length; i++) {
            this.bodies[i].update();
         };
      },
      draw: function(screen, gameSize) {
         screen.clearRect(0, 0, gameSize.x, gameSize.y);
         for(var i = 0; i < this.bodies.length; i++) {
            drawRect(screen, this.bodies[i]);
         };
      },
      addBody: function(body) {
         this.bodies.push(body);
      },
      invadersBelow: function(invader) {
         return this.bodies.filter(function(b) {
            return b instanceof Invader && b.center.y > invader.center.y && b.center.x - invader.center.x < invader.size.x;
         }).length > 0;
      }
   };
   // The hero of the game
   var Player = function(game, gameSize) {
      // cache the game object for later use
      this.game = game;
      // Dimensions of the player
      this.size = {
         x: 15,
         y: 15
      };
      // Provide a center for the player. 
      // He will be placed at the bottom mid of screen
      this.center = {
         x: gameSize.x / 2,
         y: gameSize.y - this.size.x
      };
      // Init the keyboader
      this.keyboader = new KeyBoarder();
   };
   Player.prototype = {
      update: function() {
         if(this.keyboader.isDown(this.keyboader.KEYS.LEFT)) {
            this.center.x -= 2;
         }
         else if(this.keyboader.isDown(this.keyboader.KEYS.RIGHT)) {
            this.center.x += 2;
         }
         if(this.keyboader.isDown(this.keyboader.KEYS.SHOOT)) {
            var bullet = new Bullet({
               x: this.center.x,
               y: this.center.y - this.size.x / 2
            }, {
               x: 0,
               y: -6
            });
            this.game.addBody(bullet);
         }
		 if(this.keyboader.isDown(this.keyboader.KEYS.REVIVE)){
			this.game.addBody(new Player(this.game, {x: this.game.canvas.width,y: this.game.canvas.height}));
		 }		 
      }
   };
   var Invader = function(game, center) {
      // cache the game object for later use
      this.game = game;
      // Dimensions of the invader
      this.size = {
         x: 50,
         y: 40
      };
      // Provide a center for the invader. 
      // He will be placed realtively to others invaders.
      this.center = center;
      this.patrolX = 0;
      this.speedX = 0.5;
   };
   Invader.prototype = {
      update: function() {
         if(this.patrolX < 0 || this.patrolX > 100) {
            this.speedX = -this.speedX;
         }
         this.center.x += this.speedX;
         this.patrolX += this.speedX;
         if(Math.random() > 0.995) {
            var bullet = new Bullet({
               x: this.center.x,
               y: this.center.y + this.size.x / 2
            }, {
               x: Math.random() - 0.5,
               y: 2
            });
            this.game.addBody(bullet);
         }
      }
   };
   var createInvaders = function(game) {
      var invaders = [];
         invaders.push(new Invader(game, {
            x: 150,
            y: 40
         }));
      return invaders;
   };
   // A bullet
   var Bullet = function(center, velocity) {
      // Dimensions of the bullet
      this.size = {
         x: 3,
         y: 3
      };
      this.center = center;
      this.velocity = velocity;
   };
   Bullet.prototype = {
      update: function() {
         this.center.x += this.velocity.x;
         this.center.y += this.velocity.y;
      }
   };
   var drawRect = function(screen, body) {
      screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2, body.size.x, body.size.y);
   };
   var KeyBoarder = function() {
      var keyState = {};
      window.onkeydown = function(e) {
         keyState[e.keyCode] = true;
      };
      window.onkeyup = function(e) {
         keyState[e.keyCode] = false;
      };
      this.isDown = function(keyCode) {
         return keyState[keyCode] === true;
      };
      this.KEYS = {
         LEFT: 37,
         RIGHT: 39,
         SHOOT: 38,
		 REVIVE: 82
      };
   };
   var colliding = function(b1, b2) {
      return !(b1 === b2 || b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 || b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 || b1.center.x - b1.size.x / 2 > b2.center.x + b2.size.x / 2 || b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2);
   };
   window.onload = function() {
      new Game('screen');
   };
})();