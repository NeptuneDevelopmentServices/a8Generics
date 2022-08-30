class JSONResponse {
	/**
	 * Sends a successful json response to the request
	 * @param {*} res Res from the middleware
	 * @param {*} status Status number of the response
	 * @param {*} message Message to send along with the repsponse
	 * @param {*} data Relevant data
	 */
	static success(res, status = 200, message = 'Success', data = null) {
		res.status(status).json({
			status: status,
			message,
			data,
		})
	}

	/**
	 * Sends an erroneous json response to the request
	 * @param {*} res Res from the middleware
	 * @param {*} status Status number of the response
	 * @param {*} message Message to send along with the repsponse
	 * @param {*} error Relevant error
	 */
	static error(
		res,
		status = 500,
		message = 'Error',
		error = new Error(message)
	) {
		console.error(error)
		res.status(status).json({
			status: status,
			message,
			error,
		})
	}
}

module.exports = JSONResponse
