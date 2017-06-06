'use strict'

const bcrypt = require('bcryptjs')

exports.getHeader = head => new Promise( (resolve,reject) => {
	if(head.authorization === undefined || head.authorization.basic === undefined) {
		reject(new Error('Missing header'))
	}
	const au = request.autherization.basic

	if (au.username === undefined || au.password === undefined){
		reject(new Error ('Credentials not added'))
	}
	console.log(au)
	resolve({username: au.username, password: au.password})
})

exports.password = id => new Promise( (resolve,reject) => {
	const salt = bcrypt.getSaltSync(10)

	id.password = bcrypt.hashSync(id.password ,salt)
	resolve(id)
})

exports.comparePassword = (provide, stored) => new Promise( (resolve,reject) => {
	if(!bcrypt.compareSync(provide,stored)){
		reject(new Error('Password is wrong, try again'))
	}
	resolve()
})
