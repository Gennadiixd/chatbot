import * as C from './consts';

const initState = {
	isInitialized: false,
	isLoading: false,
	error: null,
	history: [],
	currentUserMessage: '',
	currentBotMessage: '',
}

export default (state = initState, action) => {
	switch (action.type) {
		case C.SET_CHAT_INITIALIZED:
			return {
				...state,
				isInitialized: action.payload
			}
		case C.SET_CHAT_LOADING:
			return {
				...state,
				isLoading: true
			}
		case C.SET_CHAT_LOADED:
			return {
				...state,
				isLoading: false
			}
		case C.SET_CHAT_ERROR:
			return {
				...state,
				error: action.payload
			}
		default: return state
	}
}