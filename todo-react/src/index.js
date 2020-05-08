import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './redux/reducers'
import {Provider} from 'react-redux';


//const store=createStore(rootReducer);
//const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store=createStore(rootReducer)
//console.log(store);
//export default store;

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

