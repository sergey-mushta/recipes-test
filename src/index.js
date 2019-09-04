import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import saga from './redux/sagas';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducers';
import App from './components/App';


//const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
//    applyMiddleware(sagaMiddleware),
);
//sagaMiddleware.run(saga);

render(
    (<Provider store={store}>
        <App />
    </Provider>), document.getElementById('root'),
);