import GameScene from './scenes/GameScene.js'

const config = {

    title: 'SpaceCrash - SpaceRunners',
    url: 'https://www.RackGames/Html5Games/',
    version: '0.0.1',

    pixelArt: true,

    type: Phaser.AUTO,
    width: 360,
    height: 640,
    parent: 'container',
    backgroundColor: '#1b2632',

    banner: {
        hidePhaser: true,
        text: '#000000',

        background: [
            'green',
            'white',
            'red',
            'trasparent'
        ]
    },

    scene: [GameScene]
};

const game = new Phaser.Game(config);