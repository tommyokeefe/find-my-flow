import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { arrangeMyDay } from './state/reducers';
import './index.css';
import App from './components/App';

const store = createStore(
    arrangeMyDay,
    composeWithDevTools(),
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
