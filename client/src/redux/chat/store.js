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
		case C.SET_CURRENT_USER_MESSAGE:
			return {
				...state,
				currentUserMessage: action.payload
			}
		case C.SET_CURRENT_BOT_MESSAGE:
			return {
				...state,
				history: [...state.history, {
					userMessage: state.currentUserMessage,
					botMessage: action.payload
				}],
				currentBotMessage: action.payload
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
		case C.RESET_CHAT_ERROR:
			return {
				...state,
				error: false
			}
		case C.RESET_CHAT:
			return {
				...initState,
				isInitialized: true
			}
		default: return state
	}
}