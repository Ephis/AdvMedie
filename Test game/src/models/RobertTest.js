function RobertTest(game) {
    var self = this;
    self.game = game;
    
    self.drawItems = function(){
        var group = self.game.add.group();
        var bush1 = self.game.add.sprite(300, 6500, 'Bush1'); 
        bush1.anchor.set(0.5, 0.5);
        var bush2 = self.game.add.sprite(1000, 6500, 'Bush2');
        bush2.anchor.set(0.5, 0.5);
        var mushroom = self.game.add.sprite(1400, 6800, 'Mushroom');
        mushroom.anchor.set(0.5, 0.5);
        var oakTree = self.game.add.sprite(1900, 6800, 'OakTree');
        oakTree.anchor.set(0.5, 0.5);
        var pineTree = self.game.add.sprite(650, 6800, 'PineTree');
        pineTree.anchor.set(0.5, 0.5);
        
        group.add(bush1);
        group.add(bush2);
        group.add(mushroom);
        group.add(oakTree);
        group.add(pineTree);
        
        group.scale.set(0.2, 0.2);
    };
    
    self.drawItems();
}