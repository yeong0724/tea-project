import { handleActions } from 'redux-actions';
import { LIST_PRODUCT_FAILURE, LIST_PRODUCT_SUCCESS } from '../action/ProductActionType';

const initialState = {
    productList: null,
    error: null,
};

const products = handleActions(
    {
        [LIST_PRODUCT_SUCCESS]: (state, { payload: productList }) => ({
            ...state,
            productList,
        }),
        [LIST_PRODUCT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default products;
