/**
 * Represents a category
 * @typeParam <T> - The intended type of data to recieved from the api
 * @param {number} status - The http status code that was sent
 * @param {string} message - The message sent by the api
 * @param {T} data - The data sent by the api
 * @param {any} error - The error object sent by the api
 */
export interface JSONResponse<T> {
	status: number
	message: string
	data?: T
	error?: any
}
