const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base=5 , listar , hasta = 10)=> {

    try {
        
    
        let salida = '';
        for(let i=1; i<=hasta;i++){
            salida+= `${base} x ${i} = ${base*i}\n`;
        }
        
        if(listar){
            console.log('=============='.green);
            console.log('Tabla del:'.green,colors.blue(base))
            console.log('=============='.green);
            console.log(salida.rainbow) 
        }

    
        //si sucede un error manejarlo con try and catch
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
    
        /* console.log(`tabla-${base}.txt creado`); */
        return `tabla-${base}.txt`
    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo 
}