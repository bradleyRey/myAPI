'use strict'

const spotify = require('../modules/spotify')
const persist = require('../modules/mongodb')


//test to see if the artits get response has worked
describe('searching the artists', () => {
	it('shoud return an error' , (done) => {
		const fakeRequest = {
			params: {
				artistvalue:'Drake'
			}
		}
		console.log('Initiating first test')
		spotify.getArtist(fakeRequest).then(data => {
			expect(data).not.toBe(undefined)
		})
		expect(Error)
		done()
	})
})



//used to see if the artist get reponse has worked
describe('searching the artists', () => {
	it('shoud return an error' , (done) => {
		const fakeRequest = {
			params: {
				trackvalue:'Views'
			}
		}
		console.log('Initiating second test')
		spotify.getTrack(fakeRequest).then(data => {
			expect(data).not.toBe(undefined)
		})
		expect(Error)
		done()
	})
})


// used to see if the artits request has worked
describe('searching the artists', () => {
	it('shoud return an error' , (done) => {
		const fakeRequest = {
			params: {
				trackvalue:'Views'
			}
		}
		console.log('Initiating third test')
		spotify.getAlbums(fakeRequest).then(data => {
			expect(data).not.toBe(undefined)
		})
		expect(Error)
		done()
	})
})

