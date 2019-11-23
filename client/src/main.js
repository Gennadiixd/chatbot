import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './redux';

const composeEnhancers = composeWithDevTools({})
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

import App from './app';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);