var hudGroup;

function HUD(game){
    var self = this;
    self.game = game;
    
    self.drawInTownHud = function(){
        hudGroup = self.game.add.group();
        var heartIcon = self.game.add.sprite(10,10, 'HUDHeart');
        heartIcon.fixedToCamera = true;
        heartIcon.scale.setTo(0.3, 0.3);
        hudGroup.add(heartIcon);
        hud.fixedToCamera = true;
    };
    
    self.drawInFightHud = function(){
        
    };
    
    self.updateHpBar = function(){
        
    };
    
    self.updateMoney = function() {
        
    };
    
    self.drawHeathBar = function() {
        
    };
    
    
};