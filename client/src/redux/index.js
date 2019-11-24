import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import chat from './chat/store';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['chat']
}

const rootReducer = combineReducers({
    chat
});

export default persistReducer(persistConfig, rootReducer);