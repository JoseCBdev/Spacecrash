var Kilometers;
var count = 0;
var speed = 60;
var scale = .13;
var bgInfinite = 'active';

var vida = 100;
var damage;
var vidaText;
var debug;
var DamageTxt;

class GameScene extends Phaser.Scene{

    constructor(){
        super('GameScene');
    }

    init(){
        
    }

    preload(){
        this.load.path = './assets/';

        this.load.image("pelota","sprites/pelo.png",16,16);


        this.load.audio('song', 'audio/song.mp3');
        this.load.image('Background','sprites/background.png');
        this.load.image('Nave','sprites/Ship.png');
    }

    create(){

        let sfx = this.sound.add('song');
        //sfx.play();
        
        this.doggy50 = this.add.image(144, -256, 'Background').setInteractive();
        this.doggy52 = this.add.image(144, -768, 'Background').setInteractive();

        // Creamos el personaje en la posicíon X:Ancho/2 Y:Altura y le añadimos físicas.
        this.Nave = this.add.sprite(
            this.sys.game.canvas.width/2,
            this.sys.game.canvas.height-105,
            'Nave'
        );
       
        Kilometers = this.add.text(

            this.sys.game.canvas.width/50,
            this.sys.game.canvas.height/10,
            "Kilometros: 0", 
            {fontSize: '12px', fill: '#01FF5D'}
                
        );
        
        debug = this.add.text(

            this.sys.game.canvas.width/50,
            this.sys.game.canvas.height/50,
            "Coordenadas X: 0", 
            {fontSize: '12px', fill: '#01FF5D'}
                
        );

        vidaText = this.add.text(

            this.sys.game.canvas.width/50,
            this.sys.game.canvas.height/20,
            "Vida: 100", 
            {fontSize: '12px', fill: '#01FF5D'}
                
        );

        DamageTxt = this.add.text(

            this.sys.game.canvas.width/50,
            this.sys.game.canvas.height/13,
            "Count: 100", 
            {fontSize: '12px', fill: '#01FF5D'}
                
        );

        this.Nave.setScale(scale);
            

    }
    
    update(time, delta){
        var cursors = this.input.keyboard.createCursorKeys();
        
        Kilometers.setText('Kilometros: ' + count);
        vidaText.setText('Vida: ' + vida);
        debug.setText('Coordenadas X: ' + this.Nave.x);
        
        if(cursors.left.isDown || cursors.right.isDown){
            this.Nave.setScale(scale);
        }else{
            if(this.input.activePointer.isDown){
                if(this.input.x > 180){ 

                    if(this.Nave.x > 430 ){
                        this.Nave.x = -55;
                    }else{
                        this.Nave.x += 5;
                    }

                }
                if(this.input.x < 180){ // izquierda

                    if(this.Nave.x < -55){
                        
                        this.Nave.x = 430;
                    }else{
                        this.Nave.x -= 5;
                    }
                }
            }
            
           
        }

        DamageTxt.setText('Daño: ' + damage);
        if(this.Nave.x < 10 || this.Nave.x > 340){
            damage = 1;
            
            setTimeout(function(){ 
                if(damage == 1){
                    vida -= 0.5;
                }
            }, 500);
            
            
        }else{
            damage = 0;
        }

        // =====(Verifica el bucle de creación de fondo)=====
        if(bgInfinite == 'active'){

            if(this.doggy50.y > 767){
                this.doggy50.y -= 511;
                this.doggy52.y -= 511;
                count += 1;
            }else{
                this.doggy50.y += speed;
                this.doggy52.y += speed;
            }

        }
        // >>> Verifica el bucle de creación de fondo
        
    }
}

export default GameScene;


