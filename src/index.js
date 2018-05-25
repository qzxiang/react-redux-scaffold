import React from 'react';
import ReactDOM from 'react-dom';
import './style/antd.less'
import Routes from './router/index';
import store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
