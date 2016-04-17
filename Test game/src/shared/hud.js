var hudGroup;
var healthBar;

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
        self.drawHeathBar(60, 18);
    };
    
    self.drawInFightHud = function(){
        
    };
    
    self.updateHpBar = function(player){
        var displayHealth;
        displayHealth = (player.health / player.maxHealth) * 100;
        displayHealth = displayHealth * 1.28;
        healthBar.context.clearRect(0, 0, healthBar.width, healthBar.height);
        healthBar.context.fillRect(0, 0, displayHealth, 24);
        healthBar.dirty = true;
        healthBar.text.setText(player.health + ' / ' + player.maxHealth);
    };
    
    self.updateMoney = function() {
        
    };
    
    self.drawHeathBar = function(positionX, positionY) {
        var sprite;
        healthBar = self.game.add.bitmapData(128, 16);
        sprite = self.game.add.sprite(positionX, positionY, healthBar);
        sprite.fixedToCamera = true;
        hudGroup.add(sprite);
        self.game.add.tween(self.game).to({barProgress:0}, 2000, null, true, Infinity);
        healthBar.context.fillStyle = '#f00';
        healthBar.context.fillRect(0,0, 128, 24);
        
        healthBar.text = self.game.make.text(positionX + (healthBar.width / 2), positionY + (healthBar.height / 2) + 3, '100 / 100', {font: 'Bold 16px Arial', fill: '#ffffff'});
        healthBar.text.anchor.set(0.5);
        hudGroup.add(healthBar.text);
        healthBar.text.fixedToCamera = true;
        
    };
    
    
    
};