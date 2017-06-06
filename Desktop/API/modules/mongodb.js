'use strict'


const schema = require('../schema/spotifySchema')

// module to check if credentials have been satisfied
exports.saveArtist = artistDetails => new Promise( (resolve, reject) => {
	if(!'Name' in artistDetails && !'Genres' in artistDetails && ! 'Followers' in artistDetails ) {
		reject(new Error('Invalid Object'))
	}


	const Artist = new schema.Artist(artistDetails)

	Artist.save((err,docs) => {
		if(err) {
			console.log('error is here ')
			reject(err)
		}
		console.log(docs)
		resolve(docs)
	})
	.catch(err => {
		console.error(err)
	})
})


exports.saveAlbum = albumDetails => new Promise( (resolve, reject) => {
	if(!'Name' in albumDetails && !'Genres' in albumDetails && ! 'Followers' in albumDetails ) {
		reject(new Error('Invalid Object'))
	}
	const album = new schema.album(albumDetails)

	album.save(( err,album) => {

		if(err) {
			reject(Error('Nothing to save'))
		}
		resolve(album)
	})
})


exports.saveTrack = trackDetails => new Promise( (resolve, reject) => {
  if(!'Name' in trackDetails && !"Track" in trackDetails) {
    reject(new Error('Invalid Object'))
  }
  const track = new schema.track(trackDetails)

  track.save(( err,album) => {

    if(err) {
      reject(Error('Nothing to save'))
    }
    resolve(track)
  })
})
 

exports.newArtist = artistDetails => new Promise( (resolve, reject) => {
	if(!'Name' in artistDetails && !'Genres' in artistDetails && ! 'Followers' in artistDetails && !'ID' in artistDetails ) {
		reject(new Error('Invalid Artists'))
	}


	schema.artists.save({artistDetails},( err,artist) => {

		if(err) {
			reject(Error('Nothing to save'))
		}
		resolve(artist)
	})
})

// module to check if credentials have been satisfied
exports.newAlbum = albumDetails => new Promise( (resolve, reject) => {
	if(!'Name' in albumDetails && !'Album' in albumDetails ) {
		reject(new Error('Invalid Object'))
	}


	schema.artists.save({albumDetails},( err,album) => {

		if(err) {
			reject(Error('Nothing to save'))
		}
		resolve(album)
	})
})
// module to check if credentials have been satisfied
exports.newTrack = trackDetails => new Promise( (resolve, reject) => {
  if(!'Name' in trackDetails && !"Track" in trackDetails ) {
    reject(new Error('Invalid Object'))
  }


  schema.tracks.save({trackDetails},( err,track) => {

    if(err) {
      reject(Error('Nothing to save'))
    }
    resolve(track)
  })
})

// module to check if credentials have been satisfied
exports.createAccount = request => new Promise( (resolve, reject) => {
	if (!'Username' in request.params && !'Password' in request.params) {
		reject(new Error('invalid user object'))
	}
	const user = new schema.User(request.params)

	user.save( (err, user) => {
		if (err) {
			reject(new Error('Cannot create an account'))
		}

		resolve()
	})
})

// module to check if the user account exsists
exports.accountExists = account => new Promise( (resolve, reject) => {
	schema.User.find({username: account.username}, (err, docs) => {
		if (docs.length && err)
			reject(new Error('username already exists'))
		resolve()
	})
})

// module to check if credentials have been satisfied
exports.getCredentials = credentials => new Promise( (resolve, reject) => {
	schema.user.find({username: credentials.username}, (err, docs) => {
		if (err) reject(new Error('database error'))
		if (docs.length) resolve(docs)
		reject(new Error('invalid username'))
	})
})


