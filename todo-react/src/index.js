import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './Main';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const store=createStore(rootReducer, applyMiddleware(thunk))

//const store=createStore(rootReducer)

ReactDOM.render(<Provider store={store}><Main/></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

