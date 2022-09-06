require('dotenv').config()
const jwt = require('jsonwebtoken')
const { SESSION_SECRET } = process.env

class JWTHelper {
	static genToken(payload, expire = '1d') {
		return jwt.sign(payload, SESSION_SECRET, { expiresIn: expire })
	}
	static setToken(req, res, payload, name, expire = '1d') {
		res.cookie(name, this.genToken(payload, expire), {
			expiresIn: expire,
			httpOnly: true,
			secure: true,
			signed: true,
			sameSite: 'none',
		})
	}
	static getToken(
		req,
		res,
		name,
		success = (deco) => {
			console.log(deco)
		},
		expire = '1d'
	) {
		jwt.verify(
			req.signedCookies[name],
			SESSION_SECRET,
			expire,
			(err, decoded) => {
				if (err) throw err
				else success(decoded)
			}
		)
	}
	static killToken(req, res) {
		res.clearCookie('jwt_auth')
	}
}

module.exports = JWTHelper
