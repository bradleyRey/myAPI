'use strict'

const spotify = require('./spotify')
const mongoose = require('./mongodb')
const auth = require('./autherise')

// using the search tarcks module to initialise GET response
exports.searchTracks = (request,callback) => {
	spotify.getTrack(request)
  .then((data) => {
	callback(null,data)
})
  .catch((err) => {
	callback(err)
})
}
// using the search tarcks module to initialise GET response
exports.searchAlbums = (request, callback) => {
	spotify.getAlbums(request)
  .then((data) => {
	callback(null,data)
})
  .catch((err) => {
	callback(err)
})
}
// using the search tarcks module to initialise GET response
exports.searchArtists = (request,callback) => {
	spotify.getArtist(request)
  .then((data) => {
	console.log(data)
	const savePromises = []

	for (let i = 0; i < data.length ; i++){
		savePromises.push(mongoose.saveArtist(data[i]))
	}
	return Promise.all(savePromises)
})
  .then((data) =>
     callback(null,data)
  )
  .catch((err) => {
	callback(err)
})
}

exports.addAccount = (request, callback) => { //Add account into database
//used to see if there is a current account with the same credentials

		console.log(request.params)
		mongoose.createAccount(request) //Account is added if not found in the database
    .then( data => {
		callback(null, data) //Callback for data
	}).catch( err => {
		callback(err) //Catch any error if any
	})
}


const extractParams = (request, param) => new Promise( (resolve, reject) => {
	if (request.params === undefined || request.params[param] === undefined) reject(new Error(`${param} parameter missing`))
	resolve(request.params[param])
})

const extractBodyKey = (request, key) => new Promise( (resolve, reject) => {
	if (request.body === undefined || request.body[key] === undefined) reject(new Error(`missing key ${key} in request body`))
	resolve(request.body[key])
})

