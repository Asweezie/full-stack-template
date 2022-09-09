const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'FireEmblem',
    collection

    MongoClient.connect(dbConnectionString, (client, error) => {
        console.log('Connected to DB on port' + PORT)

        db = client.db(dbName)
        collection = db.connection('three-houses')
    })