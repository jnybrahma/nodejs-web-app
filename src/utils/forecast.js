const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=3d6e57f83300a81f1cad33d6ab36b249&query=' + latitude + ',' + longitude + '&units=f'

    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoiam55YnJhaG1hIiwiYSI6ImNrcGt2bTdrYTBuYTYyb3J0aHJ5a2J3cHoifQ.va5kDEDu_Get8ja2lPIZsg'

    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam55YnJhaG1hIiwiYSI6ImNrcGt2bTdrYTBuYTYyb3J0aHJ5a2J3cHoifQ.va5kDEDu_Get8ja2lPIZsg'

    //request({ url: url, json: true }, (error, response) => {
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Forecast : Unable to find location. Try another search.', undefined)
        } else {

            callback(undefined, 'It is currently ' + body.current.temperature + ' degree out. Feelslike it is  a ' + body.current.feelslike + ' degree out')

        }

    })


}

module.exports = forecast