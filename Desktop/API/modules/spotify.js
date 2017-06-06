'use strict'


const request = require('request')

// used to get data on track data from spotify
exports.getTrack = requests => new Promise((resolve,reject) => {

	const url = `https://api.spotify.com/v1/search?q=${requests.params.trackvalue}&type=track`

	console.log(url)
	request.get(url,(err,res,body) => {
		if(err){
			reject(err)
		}
		const json = JSON.parse(body)

		console.log('loading the first 10 songs from your search...')
		const Track = []
		const ten = 10
// for loop used to limit the amount of data returned
		for (let i = 0; i < ten; i++) {
			const tracks = {
				Name: json.tracks.items[i].album.artists[0].name,
				Track: json.tracks.items[i].album.name,


			}
// push the data into an array
			Track.push(tracks)

		}
		resolve(Track)
	})
})

// used to get data on album data from spotify
exports.getAlbums = requests => new Promise((resolve,reject) => {

	const url = `https://api.spotify.com/v1/search?q=${requests.params.albumvalue}&type=album`

	request.get(url,(err,res,body) => {
		if (err) {
			reject(err)
		}
		const json = JSON.parse(body)

		console.log('Loading the first 5 albums...')
		const Album = []
		const five = 10
// for loop used to limit the amount of data returned
		for (let i = 0; i < five; i++){
			const albums = {
				Name: json.albums.items[i].artists[0].name,
				Album: json.albums.items[i].name
			}
		

			Album.push(albums)
		}
		resolve(Album)
	})
})

// used to get data on artist from spotify
exports.getArtist = requests => new Promise((resolve,reject) => {

	const url = `https://api.spotify.com/v1/search?q=${requests.params.artistvalue}&type=artist`

	console.log(url)

	request.get(url,(err,res,body) => {
		if (err) {
			return reject(err)
		}

		const json = JSON.parse(body)

		//console.log(json)
		console.log('Loading the first 10 artists...')
		const Artist = []
		const ten = 10
// for loop used to limit the amount of data returned
		for (let i = 0; i < ten; i++) {
			const artists = {
				Name: json.artists.items[i].name,
				Genres: json.artists.items[i].genres,
	 				Followers: json.artists.items[i].followers.total
			}

			Artist.push(artists)
		}
		resolve(Artist)
	})
})


