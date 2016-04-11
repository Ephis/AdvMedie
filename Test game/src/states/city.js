var city = function(game) {
    this.game = game;
}

var map;
var background;
var backgroundOL;
var foreground;
var player;

var movementspeed;

var cursors;

city.prototype = {
    //Gets called once
    create: function() {
        console.log('City state')
        //Load map
        map = this.game.add.tilemap('Map');
        map.addTilesetImage('TilesetBackground', 'TilesetBG');
        map.addTilesetImage('TilesObstacles', 'TilesetObstacles');
        background = map.createLayer('Tile Layer 1');
        backgroundOL = map.createLayer('BackgroundOverlay');
        foreground = map.createLayer('Foreground');
        //background.resizeWorld();
        //Load "waypoints"
        
        //Load player
        player = player('');
        //Load npcs
        
        //Setup the map
        this.game.world.setBounds(0, 0, 3200, 3200);
        
        //Setup the player
        player.sprite.body.velocity.set(0, 0);
        player.sprite.body.colliderWorldBounds = true;
        player.sprite.body.bounce.set(1);
        
        //Physics
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        //Setting up witch tiles needs colliders
        map.setCollision(42, true, "Collision");
        //Physics engine create collision bodies from the tiles
        this.game.physics.p2.convertTilemap(map, "Collision");
        this.game.physics.p2.enable(player);
        
        //Camera
        this.game.camera.follow(player);
        
        //Controls
        cursors = this.game.input.keyboard.createCursorKeys();
        this.shift = this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
        
    },
    //Gets called every time the canvas updates 60fps = 60 times a second
    update: function() {
        //Controll movement an player inputs
        if(this.shif.isDown){
            movementspeed = player.runSpeed;
        } else {
            movementspeed = player.walkSpeed;
        }
        if(cursors.right.isDown) {
            player.sprite.body.velocity.x = movementspeed;
        } else if(cursors.left.isDown) {
            player.sprite.body.velocity.x = -movementspeed;
        } else {
            player.sprite.body.velocity.x = 0;
        }
        
        if(cursors.up.isDown) {
            player.sprite.body.velocity.y = movementspeed;
        } else if(cursors.down.isDown) {
            player.sprite.body.velocity.y = -movementspeed;
        } else {
            player.sprite.body.velocity.y = 0;
        }
    },
    //When the player wants to enter an house
    enterHouse: function() {
        
    },
    //When the player whats to fight an npc
    enterFight: function() {
        
    },
    //When player wants to open a dialog with an npc
    enterDialog: function() {
        
    }
}