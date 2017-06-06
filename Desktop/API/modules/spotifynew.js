'use strict'


const request = require('request')

exports.getArtists  = (req,callback) => {
  	if(req.params.q === undefined) {
		console.log('Missing Parameter, add the required parameter')}
  	let id = req.params.q
  	id = id.replace(/'/g,'')
  	console.log(id)
  	const url = `https://api.spotify.com/v1/search?q=${id}&type=artist`
  	console.log(url)
		request.get(url, function (error, response, body) {
			console.log(error, response.statusCode)
    if (!error && response.statusCode === 200) {
      const artist_data = []
			const json = JSON.parse(body)
			console.log("Loading the first three relevant artists")
			for (var i = 0; i < 3; i++) {
			const artist = {
				name: json.artists.items[i].name,
				genres: json.artists.items[i].genres,
				followers: json.artists.items[i].followers.total
			}
			artist_data.push(artist)
			}
			callback(null,{artist_data: artist_data})
		} else {
			callback(501 + {message: "Theres a problem with the API query", error: error, statusCode: response.statusCode})
		}
 	})
}

exports.getTrack = (req, callback) => {
	if (req.params.q === undefined) {
		console.log('Missing Parameter, add the required parameter')
	}
	let id = req.params.q
	id = id.replace(/'/g, '')
	console.log(id)
	const url = `https://api.spotify.com/v1/search?q=${id}&type=track`
	console.log(url)
	request.get(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			const track_data = []
			const json = JSON.parse(body)
			console.log("loading the first 10 songs from your search...")
			for (var i = 0; i < 10; i++) {
				const tracks = {
					Name: json.tracks.items[i].album.artists[0].name,
					Track: json.tracks.items[i].album.name
				}

				track_data.push(tracks)
			}

			callback(null, {track_data: track_data})


		} else {
			callback(error)
		}

	})
}

exports.getArtist = (req, callback) => {
	if (req.params.q === undefined) {
		console.log('Missing Parameter, add the required parameter')
	}
	let id = req.params.q
	id = id.replace(/'/g, '')
	console.log(id)
	const url = `https://api.spotify.com/v1/search?q=${id}&type=artist`
	console.log(url)
	request.get(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			const artist_data = []
			const json = JSON.parse(body)
			console.log("loading the first 10 songs from your search...")
			for (var i = 0; i < 10; i++) {
				const artists = {
					Name: json.artists.items[i].name,
					Genres: json.artists.items[i].genres,
	 				Followers: json.artists.items[i].followers.total
				}

				artist_data.push(artists)
			}

			callback(null, {artist_data: artist_data})


		} else {
			callback(error)
		}

	})
}
