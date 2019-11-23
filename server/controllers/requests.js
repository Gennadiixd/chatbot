const fetch = require("node-fetch");

class Request {
	constructor(api) {
		this.api = api
		this.type = ''
	}

	getBody() {
		return {}
	}

	send() {
		return fetch(`${this.api}.${this.type}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				"Content-Type": 'application/json'
			},
			body: JSON.stringify(this.getBody())
		})
	}
}

class InitRequest extends Request {
	constructor(api, uuid) {
		super(api)
		this.type = 'init'
		this.uuid = uuid
	}

	getBody() {
		return {
			uuid: this.uuid
		}
	}
}

class EventReadyRequest extends Request {
	constructor(api, cuid) {
		super(api)
		this.type = 'event'
		this.euid = process.env.EVENT_READY_EUID
		this.cuid = cuid
	}

	getBody() {
		return {
			euid: this.euid,
			cuid: this.cuid,
		}
	}
}

module.exports = { InitRequest, EventReadyRequest }