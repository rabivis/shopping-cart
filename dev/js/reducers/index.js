import {combineReducers} from 'redux';
import ActiveCartItems from './reducer-cart-item';
import DefaultProduct from './reducer-products';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    activeCartItems: ActiveCartItems,
    defaultProduct: DefaultProduct
});

export default allReducers
