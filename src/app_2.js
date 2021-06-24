const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for express config

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: ' Weather App',
        name: 'Brahma'
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About myself',
        name: 'J Brahma'
    })

})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Webpage',
        name: 'J Brahma'
    })

})

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'You must provide address!'
        })
    }
    geocode(req.query.address, (error, { longitude, latitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address

            })
        })

    })

})


app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
        //res.query()
    res.send({
        products: []
    })

})

// this request handler route should be come last.. 
app.get('/help/*', (req, res) => {
        res.render('404', {
            title: '404',
            name: 'J Brahma',
            errorMessage: 'Help Article not found'
        })

    })
    // this request handler route should be come last.. 
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'J Brahma',
        errorMessage: 'Page Not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')

})