const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        description: 'La base de la multiplicación'
    })
    .check( (argv,options)=>{
        if( isNaN(argv.b) ){
            throw 'La base tiene que ser un número'
        }
        return true
    } )
    .option('l',{
        alias:'listar',
        type : 'boolean',
        demandOption: false,
        description : 'Listar la tabla'
    })
    .option('h',{
        alias: 'hasta',
        type : 'number',
        demandOption: false,
        default : 10,
        description : 'Limite de la tabla'
    })
    .argv;

module.exports = argv;