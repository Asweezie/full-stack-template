const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'FireEmblem',
    collection

    MongoClient.connect(dbConnectionString, (error, client) => {

        app.set('view engine', 'ejs')
        app.use(express.static('public'))
        app.use(express.urlencoded({extended:true}))
        app.use(express.json())
        app.use(cors())
        
        console.log('Connected to MongoDB')
        db = client.db(dbName)
        collection = db.collection('three-houses')

        app.get('/', (req, res) => {
            res.render(__dirname + '/views/index.ejs')
        })
    })

    app.listen(process.env.PORT || PORT, () => {
        console.log('Server is running on port ' + process.env.PORT || PORT)
    })