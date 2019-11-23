const fetch = require("node-fetch");

class Request {
	constructor(api) {
		this.api = api
		this.type = ''
		this.fetchSettings = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				"Content-Type": 'application/json'
			},
		}
	}

	createBody() {
		return {}
	}

	send() {
		return fetch(`${this.api}.${this.type}`, {
			...this.fetchSettings,
			body: JSON.stringify(this.createBody())
		})
	}
}

class InitRequest extends Request {
	constructor({api, uuid}) {
		super(api)
		this.type = 'init'
		this.uuid = uuid
	}

	createBody() {
		return {
			uuid: this.uuid
		}
	}
}

class EventReadyRequest extends Request {
	constructor({api, cuid}) {
		super(api)
		this.type = 'event'
		this.euid = process.env.EVENT_READY_EUID
		this.cuid = cuid
	}

	createBody() {
		return {
			euid: this.euid,
			cuid: this.cuid,
		}
	}
}

class MessageRequest extends Request {
	constructor({api, cuid, userMessage}) {
		super(api)
		this.type = 'request'
		this.userMessage = userMessage
		this.cuid = cuid
	}

	createBody() {
		return {
			text: this.userMessage,
			cuid: this.cuid,
		}
	}
}

module.exports = { InitRequest, EventReadyRequest, MessageRequest }