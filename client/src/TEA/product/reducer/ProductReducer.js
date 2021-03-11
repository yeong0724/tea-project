import { handleActions } from 'redux-actions';
import {
    CHANGE_FILED,
    INITIALIZE_FORM,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../action/ProductActionType';
const initialState = {
    name: '',
    description: '',
    price: '',
    images: [],
    stock: '',
    productError: null,
};

const product = handleActions(
    {
        [CHANGE_FILED]: (state, { payload: { key, value } }) => ({ ...state, [key]: value }),

        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState,
        }),
        [REGISTER_SUCCESS]: (state) => ({
            ...state,
            productError: null,
        }),
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            productError: error,
        }),
    },
    initialState
);

export default product;
