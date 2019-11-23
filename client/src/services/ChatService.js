import React, { useEffect, useState } from 'react';

import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorageHandler';
import { initResponseModel, serviceResponseModel } from '../models/response';
import { initRequest, eventRequestReady } from './requests';

const API = process.env.API;
const UUID = process.env.UUID;
const API_EXTERNAL = process.env.API_EXTERNAL;
//TODO: remove all object destructions to server
export function useInitChat() {
	const [loading, setLoading] = useState(false);
	const [initInfo, setInitInfo] = useState(initResponseModel);
	const [error, setError] = useState(null);
	useEffect(() => {
		async function init() {
			setLoading(true);
			initRequest({ API, API_EXTERNAL, UUID })
				.then(resp => resp.json())
				.then(data => {
					setLoading(false);
					const { result: { cuid } } = data;
					saveToLocalStorage('cuid', cuid);
					setInitInfo(data);
				})
				.catch(err => {
					setError(err);
				})
		}
		init();
	}, []);

	const { result: { cuid, inf: { name } } } = initInfo;
	return { loading, cuid, infName: name, error }
}

export function useEventReady() {
	const CUID = getFromLocalStorage('cuid');
	eventRequestReady({ API, API_EXTERNAL, UUID, CUID })
		.then(resp => resp.json())
		.then(data => {
			const { result: { cuid, text: { value } } } = data;
			saveToLocalStorage(cuid);
			return value;
		})
		.catch(err => {
			return err;
		})
}