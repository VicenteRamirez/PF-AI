var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://images.g2a.com/newlayout/323x433/1x1x0/e2c53cfecd46/5912ecd65bafe3d94049a98b',
        title: 'Dark Souls 3',
        description: 'Awesome Game!!!!',
        price: 15
    }),
    new Product({
        imagePath: 'https://media.vandal.net/m/15596/the-witcher-3-wild-hunt-201551495951_1.jpg',
        title: 'The Witcher 3: Wild Hunt',
        description: 'The Witcher 3: Wild Hunt es un videojuego de rol desarrollado por CD Projekt RED. CD Projekt RED es el desarrollador mientras que la distribución corre a cargo de la Warner Bros. Interactive, en el caso de Norteamérica y Bandai Namco para Europa.',
        price: 15
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51XnIStajVL._SX331_BO1,204,203,200_.jpg',
        title: 'Assassins Creed Odyssey',
        description: 'Embárcate en una aventura en la Grecia clásica y descubre los secretos de los Assassins. Grecia, siglo V a.C. Kassandra es una mercenaria de sangre espartana, condenada a muerte por su familia, al exilio. Ahora se embarcará en un viaje épico para convertirse en una heroína legendaria y descubrir la verdad sobre su misterioso linaje.',
        price: 15
    }),
    new Product({
        imagePath: 'https://tecnogaming.com/wp-content/uploads/2013/04/GTA-V-portada.jpg',
        title: 'Grand Theft Auto V',
        description: 'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.',
        price: 15
    }),
    new Product({
        imagePath: 'https://animecristal.com/wp-content/uploads/Overwatch-Origins-PC.jpg',
        title: 'Overwatch',
        description: 'Overwatch es un videojuego de disparos en primera persona multijugador, desarrollado por Blizzard Entertainment. Fue lanzado al público el 24 de mayo del 2016, para las plataformas PlayStation 4, Xbox One, Microsoft Windows y Nintendo Switch.​se',
        price: 15
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        };
    });
}

function exit() {
    mongoose.disconnect();
}