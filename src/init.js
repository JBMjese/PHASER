const { Physics } = (Phaser);

const config = {
    width: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
}
var game =  new Phaser.Game(config);

function preload() {
    this.load.image("emoji", "./assets/southpk.png");
}
function create() {
    this.emoji = this.physics.add.image(80, 100, "emoji");
    this.emoji.setScale(1);
    this.emoji.flipx = true;
    this.emoji.setOrigin(0.5);
    //Propiedades fisicas
    this.emoji.setCollideWorldBounds(true);
    this.emoji.setBounce(0.3);
    this.emoji.setVelocity(50, 0);
    
}
function update(time, delta) {
    //this.emoji.x++;
}