function Player(sprite) {
    this.walkSpeed = 300;
    this.runSpeed = 400;
    this.sprite = sprite;
    this.lastTexture = "";
    this.health = 100;
    this.maxHealth = 100;
    
    this.idleAnimaiton = 'Idle';
    this.walkRightAnimation = 'WalkRight';
    this.walkLeftAnimation = 'WalkLeft';
    this.walkUpAnimation = 'WalkUp';
    this.walkDownAnimation = 'WalkDown';
    
    this.sprite.loadTexture('player-spritesheet');
    
    this.sprite.animations.add(this.idleAnimaiton, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    this.sprite.animations.add(this.walkRightAnimation, [14]);
    this.sprite.animations.add(this.walkLeftAnimation, [13]);
    this.sprite.animations.add(this.walkDownAnimation, [11]);
    this.sprite.animations.add(this.walkUpAnimation, [12]);

    this.moveRight = function (movementspeed) {
        player.sprite.body.velocity.x = movementspeed;
        if (this.lastTexture != 'player-right') {
            //this.sprite.frame = 14;
        }
    };
    
    this.moveLeft = function (movementspeed) {
        player.sprite.body.velocity.x = -movementspeed;
        if (this.lastTexture != 'player-left') {
            //this.sprite.frame = 13;
        }
    };
    
    this.moveDown = function (movementspeed) {
        player.sprite.body.velocity.y = +movementspeed;
        if (this.lastTexture != 'player-front') {
            //this.sprite.frame = 11;
        }
    };
    
    this.moveUp = function (movementspeed) {
        player.sprite.body.velocity.y = -movementspeed;
        if (this.lastTexture != 'player-back') {
            //this.sprite.frame = 12;
        }
    };
    
    this.idle = function(){
        if(this.sprite.animations.name != this.idleAnimaiton){
            this.sprite.frame = 0;
            this.sprite.animations.play(this.idleAnimaiton, 4, true);
            console.log("idle animation should play"); 
        }
    }
    
    this.fightMoveRight = function () {
        player.sprite.body.velocity.x = 300;
        if(this.lastTexture != 'player-fight-right'){
            this.sprite.loadTexture('player-fight-right');   
        }
    };
    
    this.fightMoveLeft = function () {
        player.sprite.body.velocity.x = -300;
        if(this.lastTexture != 'player-fight-left'){
            this.sprite.loadTexture('player-fight-left');   
        }
    };
    
    this.fightJump = function () {
        player.sprite.body.y = player.sprite.body.y - 50;
    };
    
    

};