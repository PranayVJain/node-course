const request = require('request')

const forecast = (latitude, longitude, callback) => {
    console.log('Fetching forecast info with lat = ' + latitude + ' long  = ' + longitude)
    request('http://api.weatherstack.com/current?access_key=b480335570c9d77f42b7f916139e5e99&query=Pune', (error, response) => {
        if (error) {
            callback('Error connecting the API')
        } else if (response.body.error) {
            callback('Error response')
        } else {
            const body = JSON.parse(response.body)
            callback(undefined, body)
        }
    })
}

module.exports = forecast