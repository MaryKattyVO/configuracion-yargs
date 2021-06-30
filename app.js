
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors/safe');


console.clear();

// console.log(process.argv);
console.log(argv)
// console.log('base: yargs', argv.b)
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base] = arg3.split('=')

// const base = 3;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.blue(nombreArchivo, 'creado')))
    .catch(err => console.log(colors.red(err)));