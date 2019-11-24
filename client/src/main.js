import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import reducers from './redux';

const composeEnhancers = composeWithDevTools({})
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

import App from './app';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.querySelector('#root')
);