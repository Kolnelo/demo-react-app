import 'core-js/es6';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storeFactory from './store/store-factory';
import {BrowserRouter} from 'react-router-dom';

const store = storeFactory(
    window.initialState
);

//Необходимо для эмуляции работы с базой данных
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('react-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
