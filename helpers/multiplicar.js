const fs = require('node:fs');
const colors = require('colors')



const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

  try {

    let salida = '';
    let consola = '';

    salida = `${'===================================='}
          ${'Tabla del'}  ${(base)}             
${'===================================='}
`;

    consola = `${'===================================='.yellow}
          ${'Tabla del'.green}  ${colors.yellow(base)}             
${'===================================='.yellow}
`;

    for (let i = 1; i <= hasta; i++) {
      salida += (`          ${base} ${'x'} ${i} ${'='} ${(base * i)}\n`);
      consola += (`          ${base} ${'x'.green} ${i} ${'='.cyan} ${colors.yellow(base * i)}\n`);
    }

    if (listar) console.log(colors.bold(consola));

    // fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
    const fileName = `./salida/tablas-${base}.txt`;
    fs.writeFileSync(fileName, salida);
    return fileName;
  } catch (error) {
    // return error;
    throw error;
  }

}

module.exports = {
  crearArchivo // crearArchivo: crearArchivo
}