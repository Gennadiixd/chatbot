import { initRequest } from '../services/requests';

export const checkLocalStorageItem = (name, value) => {
	if (!value) throw new Error('value for localStorage undefined');
	
	try {
		const fromLocalStorage = localStorage.getItem(name);
		if (fromLocalStorage !== value) {
			localStorage.setItem(name, value);
		}
	} catch (error) {
		throw error;
	}
}

export const getFromLocalStorage = (name) => {
	return localStorage.getItem(name);
}

const CUIDHelper = async ({ API, API_EXTERNAL, uuid }) => {
	return initRequest({ API, API_EXTERNAL, uuid })
		.then(resp => resp.json())
		.then(data => {
			const { cuid } = data;
			checkLocalStorageItem('cuid', cuid);
			return cuid;
		})
		.catch(error => {
			throw error;
		})
}

export const getCUID = async (reqParams) => {
	try {
		const cuid = localStorage.getItem('cuid');
		if (!cuid) throw new Error('cuid nor found');
		return cuid;
	} catch (error) {
		return CUIDHelper(reqParams)
			.then(cuid => {
				return cuid;
			})
			.catch(error => {
				throw error
			})
	}
}