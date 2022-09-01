const JSONResponse = require('./json.helper')

const authCheck = (types) => {
	for (let index = 0; index < types.length; index++) {
		switch (types[index]) {
			case 'driver':
				types[index] = 0
				break
			case 'user':
				types[index] = 1
				break
			case 'admin':
				types[index] = 2
				break
		}
	}
	return (req, res, next) => {
		let type = req.session.type
		if (types.includes(type)) {
			next()
		} else {
			JSONResponse.error(
				res,
				401,
				'Access denied! Please log in, or access this route through the appropriate means.'
			)
		}
	}
}

module.exports = authCheck
