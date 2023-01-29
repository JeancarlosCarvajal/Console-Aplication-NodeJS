const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
// const colors = require('colors')
require('colors')
// var colors = require('colors/safe');

console.clear();


// const base = 2;


// escribimos en la terminar..... node app --base=5 ..... 
// para cargar el valor base 5 al sistema

// console.log(process.argv);
// console.log(argv);
// console.log('Base argv: ', argv.base);

// const [, , arg3 = 5] = process.argv;
// const [, base = 3] = arg3.split('=');

// console.log(base);


// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); 
// console.log(colors.green('hello')); // outputs green text
// console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
// console.log(colors.inverse('inverse the color')); // inverses the color
// console.log(colors.rainbow('OMG Rainbows!')); // rainbow
// console.log(colors.trap('Run the trap')); // Drops the bass


// // Creamo el archivo
crearArchivo(argv.b, argv.l, argv.h)
  .then(fileName => console.log(`Archivo creado, nombre: ${fileName}`))
  .catch(error => console.log(error));