const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=cab8e967bb52931a8d96563a637b327b&query=' + latitude +',' + longitude + '&units=f'

    request({ url, json:true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)

        }else if (body.error) { 
            callback('Unable to find location', undefined)

        } else {
            callback(undefined, body.current.temperature + ' desgrees out. It feels like ' + body.current.feelslike + ' degrees out.')

        }
    })

}

module.exports = forecast