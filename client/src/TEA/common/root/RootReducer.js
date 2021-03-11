import { combineReducers } from 'redux';
import user from '../member/reducer/userReducer';
import product from '../../product/reducer/ProductReducer';
import products from '../../product/reducer/ProductListReducer';
import loading from '../util/lib/loading';

const rootReducer = combineReducers({
    user,
    product,
    loading,
    products,
});

export default rootReducer;
