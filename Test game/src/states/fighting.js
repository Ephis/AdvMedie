var fighting = function(game) {
    this.game = game;
}

var player;
var hud;

fighting.prototype = {
    //Loads the player, the background and the enermy
    preload: function() {
    },
    //Sets up the game stage
    create: function() {
          //Load player
        playerSprite = this.game.add.sprite(50, 493, 'player-fight-right');
        player = new Player(playerSprite);
        //Setup the map
        this.game.world.setBounds(0, 0, 800, 600);
                
            //Physics 
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.enable(self.player.sprite);
        this.game.physics.p2.gravity.y = 300;
        //this.game.physics.p2.restitution = 0.8;
        
        //Setup the player
        player.sprite.anchor.set(0.5);
        player.sprite.body.collideWorldBounds = true;
        player.sprite.body.fixedRotation = true;
        //Player size
        player.sprite.scale.setTo(0.04, 0.04);
        
        //Player physics debug
       // player.sprite.body.debug = true;
        player.sprite.body.clearShapes();
        player.sprite.body.addRectangle(40,205,-5,6);
        
        //Controls
        cursors = this.game.input.keyboard.createCursorKeys();
        this.jumpKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        
        //Add onDown callbacks to keys
        this.jumpKey.onDown.add(this.jump, this);
        
        //Setting up HUD
        hud = new HUD(this.game);
        hud.drawInFightHud();
        hud.updateHpBar(player);
    },
    //Checks everything un screen update
    update: function() {
        if(this.rightKey.isDown) {
            player.fightMoveRight();
        } else if(this.leftKey.isDown) {
            player.fightMoveLeft();
        } else {
            player.sprite.body.velocity.x = 0;
        }
    },
    
    jump: function(){
        player.fightJump();
    }
    

}