
const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = async(base, listar = false, hasta = 10)=> {
    try {
        let salida = '';
        let consola = '';
        console.log(hasta)
        for( let i=1; i<=hasta; i++){ 
            salida += `${base} * ${i} =  ${base * i}\n`;
            consola += `${colors.yellow(base)} ${colors.red('*')} ${colors.yellow(i)} ${colors.red('=')}  ${colors.yellow(base * i)}\n`;
        }
        if(listar) {
            console.log(colors.green('======================='));
            console.log(colors.green(`TABLA DEL ${base}`));
            console.log(colors.green('======================='));
            console.log(consola);

        }
        
        // fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // })
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla - ${base}.txt`
    } catch(error) {
            throw error
    }
    
}

module.exports = {
    crearArchivo
}