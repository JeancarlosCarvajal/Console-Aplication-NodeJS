

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    demandOption: true,
    description: 'El numero base para multiplicar',
    type: 'number'
  })
  .option('l', {
    alias: 'listar',
    default: false,
    description: 'Muestra la tabla en consola',
    type: 'boolean'
  })
  .option('h', {
    alias: 'hasta', 
    demandOption: true,
    description: 'Muestra hasta donde llega la multiplicacion',
    type: 'number'
  })
  .check((argv, options) => {
    // console.log('yargs', argv);
    if (isNaN(argv.base)) {
      throw 'La base tiene que ser un numero'
    }
    return true
  })
  .argv


module.exports = argv