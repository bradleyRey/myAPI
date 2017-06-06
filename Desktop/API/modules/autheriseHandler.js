
'use strict'

const authorize = require('./authorize')

exports.authorize = (req, res, next) => {
	const auth = req.authorization

	authorize.check(auth, (err, ok) => {
		if (err) return res.send(401, err)
		return next()
	})
}
