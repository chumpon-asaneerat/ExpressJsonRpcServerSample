const express = require('express')
const bodyParser = require('body-parser')
const jayson = require('jayson')

const cats = {
    speak: function(args, callback) {
        callback(null, 'meow')
    }
}
const dogs = {
    speak: function(args, callback) {
        callback(null, 'woof')
    }
}

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.post('/cats', jayson.server(cats).middleware())
app.post('/dogs', jayson.server(dogs).middleware())
app.listen(5000)