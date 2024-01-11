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
    this.emoji = this.physics.add.image(50, 100, "emoji");
    this.emoji.setScale(1);
    this.emoji.flipx = true;
    this.emoji.setOrigin(0.5);
    
}
function update(time, delta) {
    //this.emoji.x++;
}