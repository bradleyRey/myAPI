'use strict'

const mongoose = require('mongoose')
const db = {
	user: 'brad304CEM',
	pass: 'bradapi1996'
}

mongoose.connect(`mongodb://${db.user}:${db.pass}@ds159387.mlab.com:59387/304cem_api`)
mongoose.Promise = global.Promise
const Schema = mongoose.Schema


const artistSchema = new Schema ({
	Name: String,
	Genres: String,
	Followers: String,

})

exports.Artist = mongoose.model('Artist', artistSchema)


const userSchema = new Schema ({
	Username: String,
	Password: String,
})

exports.User = mongoose.model('User', userSchema)
