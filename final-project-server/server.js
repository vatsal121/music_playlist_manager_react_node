'use strict'

const express = require('express')
const app = express()
const cors = require('cors')
const DB = require('./src/dao')
app.use(express.static('public_html'))

// SET CORS to allows cross-origin resource sharing access
app.use(cors())

// support parsing of application/json type post data
app.use(express.json())

// support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({
    extended: true
}))

// HOME PAGE http://localhost:8000
app.get('/',
    function (req, res) {
        return res.send('<h4>Music Album REST API server</h4>')
    }
)

app.get('/playlist', function (request, response) {
    DB.connect()
    DB.query('SELECT * from playlist order by id asc', function (playList) {
        const playListJSON = {
            playList: playList.rows
        }
        const playListJSONString = JSON.stringify(playListJSON, null, 4)
        // set content type
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        // DB.disconnect()
        // send out a string
        response.end(playListJSONString)
    })
})

app.get('/tracks', function (request, response) {
    DB.connect()
    let query = 'select t.id, p.title as playlist_title, t.title, uri, master_id '
    query += 'from track t LEFT JOIN playlist p on p.id=t.playlist_id order by t.id asc'
    DB.query(query, function (track) {
        const tracksJSON = {
            tracks: track.rows
        }
        const tracksJSONString = JSON.stringify(tracksJSON, null, 4)
        // set content type
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        // DB.disconnect()
        // send out a string
        response.end(tracksJSONString)
    })
})

app.post('/tracks', function (request, response) {
    const trackData = {
        id: request.body.id,
        playlist_id: request.body.playlist_id,
        title: request.body.title,
        uri: request.body.uri,
        master_id: request.body.master_id
    }
    DB.connect()
    DB.query('select  max(id) as last_inserted_id from track', function (data) {
        let insertQuery = 'insert into track(id,playlist_id,title,uri,master_id)'
        insertQuery += ' VALUES($1,$2,$3,$4,$5)'
        const queryParams = [data.rows[0].last_inserted_id + 1, trackData.playlist_id, trackData.title, trackData.uri, trackData.master_id]
        DB.queryParams(insertQuery, queryParams, function (tracks) {
            const statusCode = 200
            const msg = 'Succussfully inserted data'
            const error = null

            response.writeHead(statusCode, {
                'Content-Type': 'application/json'
            })
            const tracksJSONString = JSON.stringify({
                statusCode: statusCode,
                message: msg,
                error: error
            }, null, 4)
            DB.disconnect()

            // send out a string
            response.end(tracksJSONString)
        })
    })
})

app.delete('/tracks/:id', function (request, response) {
    const id = request.params.id // read the :id value send in the URL
    DB.connect()
    DB.queryParams('DELETE from track WHERE id=$1', [id], function (tracks) {
        response.writeHead(200, {
            'Content-Type': 'text/json'
        })
        DB.disconnect()
        // send out a string
        const tracksJSONString = JSON.stringify({
            statusCode: 200,
            message: 'OK track deleted',
            error: null
        }, null, 4)
        response.end(tracksJSONString)
    })
})

const portNo = process.env.PORT || 8000
app.listen(portNo, function () {
    console.log(`Server listening to port ${portNo}, go to http://localhost:${portNo}`)
})
