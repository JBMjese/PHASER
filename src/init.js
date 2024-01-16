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
                //y: 500
            }
        }
    }
}

const game =  new Phaser.Game(config);

function preload() {
    this.load.image("emoji", "./assets/southpk.png");
}
function create() {
    //console.log(Phaser.Input.Keyboard.KeyCodes);
    this.emoji = this.physics.add.image(100, 50, "emoji");
    console.log(this.input.keyboard.createCursorKeys());   
    this.cursor = this.input.keyboard.createCursorKeys();
    
    
    /*
    this.emoji.setScale(1);
    this.emoji.flipx = true;
    this.emoji.setOrigin(0.5);
    //Propiedades fisicas
    this.emoji.setCollideWorldBounds(true);
    this.emoji.setBounce(0.3);
    this.emoji.setVelocity(50, 0);
    */
    
}
function update(time, delta) {
    /*if (this.cursor.right.isDown) {
        this.emoji.setAcceleration(100, 0);
    };
    if (this.cursor.right.isUp) {
        this.emoji.setAcceleration(0, 0);
        this.emoji.setVelocity(0);
    }; */
    //console.log(this.cursor.right.isUp());
    if(this.cursor.right.isDown) {
        this.emoji.x++;
    } else if(this.cursor.left.isDown) {
        this.emoji.x--;
    }
}