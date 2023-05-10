const express = require('express')
const path = require('path')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title: 'Welcome to Weather app'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Welcome to about page'
    })
})

app.get('/help', async (req, res) => {
})

app.get('/weather', (req, res) => {
    console.log(req.query)
    if (!req.query.address) {
        return res.send({ error: 'Address is required' })
    }

    geocode(req.query.address, (error, { latitude, longitude } = {}) => {
        if (error) {
            return res.send({ error: 'Error fetching geocode' })
        }
        forecast(latitude, longitude, (error, response) => {
            if (error) {
                return res.send({ error: 'Error fetching forecast' })
            }
            console.log(response)
            res.send([
                {
                    city: req.query.address,
                    forecast: 'No rain'
                }])
        })

    })


})

app.listen(port)