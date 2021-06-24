const express = require('express')

const app = express()

app.get('', (req, res) => {
    // res.send('Hello Express Web App!')
    res.send('<h1>Hello Express Weather Web App!</h1>')
})

app.get('/help', (req, res) => {
    // res.send('Help page')
    res.send([{
        name: 'Brahma',
    }, {
        name: 'Sami'

    }])
})


app.get('/about', (req, res) => {

    res.send('<h1>About Web Page</h1>')

})
app.get('/weather', (req, res) => {

        //res.send('Weather Web Page')
        res.send({
            forecast: 'Its chilling winter',
            location: 'Ipswich'
        })

    })
    // app.com 
    // app.com/help
    // app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')

})