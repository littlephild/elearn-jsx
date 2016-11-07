import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers/';
import {Provider} from 'react-redux';
import Layout from './component/LayOut';

const store = createStore(allReducers)

const app = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>, app
);
