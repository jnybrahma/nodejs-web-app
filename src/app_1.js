const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { request } = require('express')


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

    //res.send('Weather Web Page')
    res.send({
        forecast: 'Its chilling winter',
        location: 'Ipswich'
    })

})

app.get('/help/*', (req, res) => {
        res.send('Help Article no found')

    })
    // this request handler route should be come last.. 
app.get('*', (req, res) => {
    res.send('404 Page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')

})