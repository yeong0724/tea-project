import { combineReducers } from 'redux';
import user from '../member/reducer/userReducer';
import product from '../../product/reducer/ProductReducer';
import products from '../../product/reducer/ProductListReducer';
import loading from '../util/lib/loading';
import review from '../../product/reducer/ReviewReducer';
import post from '../../product/reducer/PostReducer';
import posts from '../../product/reducer/PostsReducer';
const rootReducer = combineReducers({
    user,
    product,
    loading,
    products,
    review,
    post,
    posts,
});

export default rootReducer;
