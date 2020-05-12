import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
//import RootReducer from './reducers/posts/reducer';

import RootReducer from './redux/reducer';

export const middlewares=[ReduxThunk];

export const createStoreWithMiddleware=applyMiddleware(...middlewares)(createStore)
export const store=createStoreWithMiddleware(RootReducer);