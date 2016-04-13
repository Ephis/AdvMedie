var city = function(game) {
    this.game = game;
}

var hud;

var map;
var background;
var road;
var player;

var movementspeed;

var cursors;

city.prototype = {
    //Gets called once
    create: function() {
        console.log('City state')
        //Load map
        map = this.game.add.tilemap('Map');
        map.addTilesetImage('RPGpack_sheet', 'Tileset');
        map.addTilesetImage('Collision', 'TilesetCollision')
        background = map.createLayer('Grass');
        road = map.createLayer('Road');
        map.createLayer('Fence');
        map.createLayer('Trees');
        map.createLayer('HouseWalls');
        map.createLayer('HouseRoof');
        map.createLayer('HouseDoor');
        map.createLayer('HouseWindow');
        map.createLayer('Bushes');
        background.resizeWorld();
         //Load "waypoints"
        
        //Load player
        playerSprite = this.game.add.sprite(50, 1700, 'player-front');
        player = new Player(playerSprite);
        
        //Load npcs
        
        //Physics
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        //Setting up witch tiles needs colliders
        map.setCollision(261, true, 'Collisions');
        this.game.physics.p2.convertTilemap(map, 'Collisions');
        this.game.physics.p2.enable(player.sprite);
        player.sprite.body.fixedRotation = true;
        //Physics engine create collision bodies from the tiles
        this.game.physics.enable(player.sprite);
        this.game.physics.arcade.enable(map);
        this.game.physics.setBoundsToWorld();
        
        //Setup the map
        this.game.world.setBounds(0, 0, 3200, 3200);
        
        //Setup the player
        //player.sprite.body.velocity.set(0,0);
        player.sprite.body.colliderWorldBounds = true;
        player.sprite.anchor.set(0.5);
        //player.sprite.body.bounce.set(1);
        player.sprite.body.collideWorldBounds = true;
        //Player size
        player.sprite.scale.setTo(0.2, 0.2);
        
        //Player physics debug
        player.sprite.body.debug = true;
        player.sprite.body.clearShapes();
        player.sprite.body.addRectangle(40,60,0,0);
        
        //Camera
        this.game.camera.follow(player.sprite);
        
        //Controls
        cursors = this.game.input.keyboard.createCursorKeys();
        this.shift = this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        
        //Setting up HUD
        hud = new HUD(this.game);
        hud.drawInTownHud();
    },
    //Gets called every time the canvas updates 60fps = 60 times a second
    update: function() {
        //Controll movement an player inputs
        if(this.shift.isDown){
            movementspeed = player.runSpeed;
        } else {
            movementspeed = player.walkSpeed;
        }
        if(this.rightKey.isDown) {
            player.moveRight(movementspeed);
        } else if(this.leftKey.isDown) {
            player.moveLeft(movementspeed);
        } else {
            player.sprite.body.velocity.x = 0;
        }
        
        if(this.upKey.isDown) {
            player.moveUp(movementspeed);
        } else if(this.downKey.isDown) {
            player.moveDown(movementspeed);
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