const sharp = require('sharp');

sharp(__dirname + '/original.png')
    .resize(80)
    .grayscale()
    .toFile(__dirname + '/resized3.png')
    .then(() => console.log('Imagen redimensionada con éxito'))
    .catch(err => console.error('Error:', err));