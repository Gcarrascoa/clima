const axios = require('axios');

const geLugarLatLong = async(direccion) => {
    // console.log(argv.direccion);

    const encodeUrl = encodeURI(direccion);
    // console.log(encodeUrl);

    //creando una instancia
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '412ff9e2dcmshdc5c2e75467d958p11ce10jsn91f61b7111ec' }
    });

    const resp = await instance.get();
    // console.log(resp.data.Results.length);
    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontro resultado para la direccion ${direccion}`);
    }
    const data = resp.data.Results[0];
    const lugar = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        lugar,
        lat,
        lon
    }
}

module.exports = {
    geLugarLatLong
}