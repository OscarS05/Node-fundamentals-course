function asincrona(callback){
    setTimeout(() => {
        try {
            let a = 3 + z;
            // let a = 3 + 3;
            callback(null, a);
        } catch (error) {
            callback(error, null);
        }
    }, 1000);
}

asincrona(function(err, data) {
   if(err) {
        console.error('Tenemos un error', err);
        // throw new Error(err); // NO VA A FUNCIONAR USAR THROW EN FUNCIONES ASINCRONAS
        
        return false;
    }
    console.log('Todo ha ido bien, mi data es', data);
});