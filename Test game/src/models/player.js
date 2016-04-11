function Player(sprite) {
    this.walkSpeed = 200;
    this.runSpeed = 300;
    this.sprite = sprite;

    this.moveRight = function (movementspeed) {
        player.sprite.body.velocity.x = movementspeed;
        this.sprite.loadTexture('player-right');
    };
    this.moveLeft = function (movementspeed) {
        player.sprite.body.velocity.x = -movementspeed;
        this.sprite.loadTexture('player-left');
    };
    this.moveDown = function (movementspeed) {
        player.sprite.body.velocity.y = +movementspeed;
        this.sprite.loadTexture('player-front');
    };
    this.moveUp = function (movementspeed) {
        player.sprite.body.velocity.y = -movementspeed;
        this.sprite.loadTexture('player-back');
    };

};