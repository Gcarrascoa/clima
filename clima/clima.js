const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e5f480387e288a9f856de3fe79eae0e&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}