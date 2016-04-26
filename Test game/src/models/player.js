function Player(sprite) {
    this.walkSpeed = 300;
    this.runSpeed = 400;
    this.sprite = sprite;
    this.lastTexture = "";
    this.health = 100;
    this.maxHealth = 100;

    this.moveRight = function (movementspeed) {
        player.sprite.body.velocity.x = movementspeed;
        if (this.lastTexture != 'player-right') {
            this.sprite.loadTexture('player-right');
        }
    };
    
    this.moveLeft = function (movementspeed) {
        player.sprite.body.velocity.x = -movementspeed;
        if (this.lastTexture != 'player-left') {
            this.sprite.loadTexture('player-left');
        }
    };
    
    this.moveDown = function (movementspeed) {
        player.sprite.body.velocity.y = +movementspeed;
        if (this.lastTexture != 'player-front') {
            this.sprite.loadTexture('player-front');
        }
    };
    
    this.moveUp = function (movementspeed) {
        player.sprite.body.velocity.y = -movementspeed;
        if (this.lastTexture != 'player-back') {
            this.sprite.loadTexture('player-back');
        }
    };
    
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