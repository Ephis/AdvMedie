var main = main || {};

main.game = new Phaser.Game(800, 600, Phaser.AUTO,'');

main.game.state.add('Preload', preload);
main.game.state.add('Menu', menu);
main.game.state.add('City', city);
main.game.state.add('Fight', fighting);
main.game.state.add('Dialog', dialog);
main.game.state.add('House', house);

main.game.state.start('Preload');