const JSONResponse = require('../../../lib/json.helper')
const JWTHelper = require('../../../lib/jwt.helper')

const authCheck = (types) => {
	for (let index = 0; index < types.length; index++) {
		switch (types[index]) {
			case 'type1':
				types[index] = 0
				break
			case 'type2':
				types[index] = 1
				break
		}
	}
	return async (req, res, next) => {
		JWTHelper.getToken(req, res, 'jwt_auth', (deco) => {
			if (types.includes(deco.type)) {
				next()
			} else {
				JSONResponse.error(
					req,
					res,
					401,
					'Access denied! Please log in, or access this route through the appropriate means.'
				)
			}
		})
	}
}

module.exports = authCheck
