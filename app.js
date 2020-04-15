const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.geLugarLatLong(argv.direccion)
    .then(data => {
        console.log(data);
        clima.getClima(data.lat, data.lon)
            .then(console.log)
            .catch(e => console.log('se genero un error:\n ', e))
    })