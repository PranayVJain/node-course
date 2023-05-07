const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')

geocode('Pune', (error, {response}) => {
    if (response) {
        forecast(response.latitude, response.longitude, (error, response) => {
            if (response) {
                console.log('Information is ', response)
            }
        })
    }
})
