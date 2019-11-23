import React, { useEffect, useState } from 'react';

import { checkLocalStorageItem, getCUID } from '../utils/IDHandlers';
import { initResponseModel } from '../models/response';
import { initRequest, eventRequestReady, requestMessage } from './requests';

const API = process.env.API;
const uuid = process.env.UUID;
const API_EXTERNAL = process.env.API_EXTERNAL;

const reqParams = { API, API_EXTERNAL, uuid };

export function useInitChat() {
	const [loading, setLoading] = useState(false);
	const [initInfo, setInitInfo] = useState(initResponseModel);
	const [error, setError] = useState(null);
	useEffect(() => {
		async function init() {
			setLoading(true);
			initRequest({ API, API_EXTERNAL, uuid })
				.then(resp => resp.json())
				.then(data => {
					setLoading(false);
					const { cuid } = data;
					checkLocalStorageItem('cuid', cuid);
					setInitInfo(data);
				})
				.catch(err => {
					setLoading(false);
					setError(err);
				})
		}
		init();
	}, []);

	const { cuid, name } = initInfo;
	return { loading, cuid, infName: name, error }
}
//TODO: DRY
export async function sendEventReady() {
	let cuid = await getCUID(reqParams);
	return eventRequestReady({ API, API_EXTERNAL, cuid })
		.then(resp => resp.json())
		.then(data => {
			const { cuid, value } = data;
			checkLocalStorageItem('cuid', cuid);
			return { botMessage: value };
		})
		.catch(error => {
			throw error;
		})
}

export async function sendMessage(userMessage) {
	let cuid = await getCUID(reqParams);
	return requestMessage({ API, API_EXTERNAL, cuid, userMessage})
		.then(resp => resp.json())
		.then(data => {
			const { cuid, value } = data;
			checkLocalStorageItem('cuid', cuid);
			return { botMessage: value };
		})
		.catch(error => {
			throw error;
		})
}