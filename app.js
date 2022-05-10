const {crearArchivo} = require('./helpers/multiplicar') //importar método  de un archivo
const argv = require('./config/yargs') 


console.clear()

/* console.log(argv); */


//No recomendable hacerlo de esta manera
/* const [,,arg3 = 'base=4'] = process.argv
const [,base = 7] = arg3.split('=') */

crearArchivo( argv.base , argv.listar , argv.hasta)
    .then(nombreArchivo => {console.log(nombreArchivo.rainbow,'creado')})
    .catch(err => console.error(err))