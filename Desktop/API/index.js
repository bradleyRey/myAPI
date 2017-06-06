'use strict'


const restify = require('restify')
const main = require('./modules/main')
const server = restify.createServer()


server.use(restify.fullResponse())
server.use(restify.bodyParser())
server.use(restify.queryParser())
server.use(restify.authorizationParser())

// created an object for my status codes
const statusCodes = {
	ok: 200,
	added: 201,
	badRequest: 400,

}
// variable to store the default port number
const default_port = 8080


// used to get data for tracks
server.get('/track/:trackvalue',(req,res) => {
	main.searchTracks(req,(err,data) => {
		res.setHeader('content-type','application/json')
		res.setHeader('accepts', 'GET')
		if (err){
			res.send(statusCodes.badRequest, {error: err.message})
		}		else {
  	res.send(statusCodes.ok, data)
		}
		res.end()
	})
})

// used to post data for tracks
server.post('/track:trackvalue', (req,res) => {
	main.searchTracks(req,(err,data) => {
		res.setHeader('content-type', 'application/json')
		res.setHeader('accepts', 'GET, POST')
		if (err) {
			res.send(status.badRequest, {error: err.message})
		} 		else {
			res.send(status.added, {track: data})
		}
		res.end()
	})
})

// used to get data for artist
server.get('/artists/:artistvalue',(req,res) => {
	main.searchArtists(req,(err,data) => {
		res.setHeader('content-type', 'application/json')
		res.setHeader('accepts', 'GET')
		if(err){
			res.send(statusCodes.badRequest, {error: err.meessage})
		} else {
			res.send(statusCodes.ok, data)
		}
		res.end()
	})
})
// used to post data for artist
server.post('/artists/:artistvalue', (req,res) => {
	main.searchArtists(req,(err,data) => {
		res.setHeader('content-type', 'application/json')
		res.setHeader('accepts', 'GET, POST')
		if (err) {
			res.send(status.badRequest, err)
		} 		else {
			res.send(status.added, data)
		}
		res.end()
	})
})
// used to get data for albums
server.get('/albums/:albumvalue', (req,res) => {
	main.searchAlbums(req,(err,data) => {
		res.setHeader('content-type', 'application/json')
		res.setHeader('accepts', 'GET')
		if(err){
			res.send(statusCodes.badRequest, {error: err.message})
		} else{
			res.send(statusCodes.ok, data)
		}
		res.end()
	})
})

// used to posy data for the user credentials
server.post('/acc/:Username/:Password', (req,res) => {
	main.addAccount(req,(err,data) => {
		res.setHeader('content-type', 'application/json')
		res.setHeader('accepts', 'GET, POST')
		if (err) {
			res.send(status.badRequest, err)
		} 		else {
			res.send(status.added, data)
		}
		res.end()
	})
})

// used to start the server
const port = process.env.PORT || default_port

server.listen(port, err => {
	if (err) {
		console.error(err)
	} else {
		console.log('App is ready at : ' + port)
	}
})


