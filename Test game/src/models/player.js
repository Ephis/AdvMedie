function Player(sprite) {
    this.walkSpeed = 300;
    this.runSpeed = 400;
    this.sprite = sprite;
    this.lastTexture = "";

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

};