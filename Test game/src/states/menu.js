var menu = function (game) {
    this.game = game;
}

var startBtn;
var continueBtn;
var quitBtn;

var lastButtonHovered;

menu.prototype = {
    create: function () {
        console.log("Menu state");
        //Setup background image
        this.game.add.tileSprite(0, 0, 800, 600, 'MenuBackground');

        //Setting up the text
        var title = this.game.add.text(400, 150, 'Epoch', {
            font: 'Bold 64px Arial',
            fill: '#660000'
        });
        title.anchor.set(0.5);

        //Setup all the buttons
        startBtn = this.game.add.button(400, 300, 'MenuStartButton', this.startGame, this);
        continueBtn = this.game.add.button(400, 350, 'MenuContinueButton', this.continueGame, this);
        quitBtn = this.game.add.button(400, 400, 'MenuQuitButton', this.quitGame, this);
        startBtn.anchor.set(0.5);
        continueBtn.anchor.set(0.5);
        quitBtn.anchor.set(0.5);

    },

    update: function () {
        if (startBtn.input.pointerOver()) {
            this.mouseOverSound('start');
            startBtn.scale.set(1.1, 1.1);
        } else {
            startBtn.scale.set(1, 1);
        }
        if (continueBtn.input.pointerOver()) {
            this.mouseOverSound('continue');
            continueBtn.scale.set(1.1, 1.1);
        } else {
            continueBtn.scale.set(1, 1);
        }
        if (quitBtn.input.pointerOver()) {
            this.mouseOverSound('quit');
            quitBtn.scale.set(1.1, 1.1);
        } else {
            quitBtn.scale.set(1,1);
        }
    },

    //Starts a new game
    startGame: function () {
        //Plays a sound when button is clicked
        this.game.sound.play('StartGameSound');
        //Chages the game state to City, since thats the main stage of the game
        this.state.start('City');
    },

    loadGame: function () {

    },

    continueGame: function () {

    },

    quitgame: function () {

    },

    mouseOverSound: function (button) {
        if (button != lastButtonHovered) {
            this.game.sound.play('MouseOver');
            lastButtonHovered = button;
        }
    }
}