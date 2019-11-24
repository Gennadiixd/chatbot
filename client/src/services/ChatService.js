import { checkLocalStorageItem, getCUID } from '../utils/IDHandlers';
import { initRequest, eventRequestReady, requestMessage } from './requests';

const API = process.env.API;
const uuid = process.env.UUID;
const API_EXTERNAL = process.env.API_EXTERNAL;

const UUIDReqParams = { API, API_EXTERNAL, uuid };

const dataHandler = async (fromServer) => {
	return fromServer
		.then(resp => resp.json())
		.then(data => {
			//message from chatbot in value
			const { cuid, value } = data;
			checkLocalStorageItem('cuid', cuid);
			return value;
		})
		.catch(error => {
			throw error;
		})
}

export async function initChat() {
	return initRequest({ API, API_EXTERNAL, uuid })
		.then(resp => resp.json())
		.then(data => {
			const { cuid } = data;
			checkLocalStorageItem('cuid', cuid);
			return true;
		})
		.catch(error => {
			return error;
		})
}

export async function sendEventReady() {
	const cuid = await getCUID(UUIDReqParams);
	return dataHandler(
		eventRequestReady({ API, API_EXTERNAL, cuid })
	);
}

export async function sendMessage(userMessage) {
	const cuid = await getCUID(UUIDReqParams);
	return dataHandler(requestMessage
		({ API, API_EXTERNAL, cuid, userMessage })
	);
}