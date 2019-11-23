import * as C from './consts';
import { initChat } from '../../services/ChatService'

const setLoading = () => {
	return {
		type: C.SET_CHAT_LOADING,
	}
}

const setLoaded = () => {
	return {
		type: C.SET_CHAT_LOADED,
	}
}

const setError = (error) => {
	return {
		type: C.SET_CHAT_ERROR,
		payload: error
	}
}

const setInitialized = (boolean) => {
	return {
		type: C.SET_CHAT_INITIALIZED,
		payload: boolean
	}
}

export const initChatAC = () => {
	return (dispatch) => {
		dispatch(setLoading());
		initChat()
			.then(() => {
				dispatch(setInitialized(true));
				dispatch(setLoaded());
			})
			.catch(error => {
				dispatch(setError(error));
				dispatch(setLoaded());
			})
	}
}