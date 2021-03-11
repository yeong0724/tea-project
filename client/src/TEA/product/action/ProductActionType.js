import { createRequestActionTypes } from '../../common/util/lib/createRequestActionTypes';

export const CHANGE_FILED = 'product/CHANGE_FILED';
export const INITIALIZE_FORM = 'product/INITIALIZE_FORM';
export const CHANGE_IMAGES = 'product/CHANGE_IMAGES';

export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'product/REGISTER'
);

export const [LIST_PRODUCT, LIST_PRODUCT_SUCCESS, LIST_PRODUCT_FAILURE] = createRequestActionTypes(
    'product/LIST_PRODUCT'
);
