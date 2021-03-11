import { createAction } from 'redux-actions';
import { CHANGE_FILED, INITIALIZE_FORM, REGISTER, LIST_PRODUCT } from './ProductActionType';

/* Action 생성 함수 */
export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({
    key, //ProductName, Description, Price, Images
    value, //실제값
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); //product

export const productRegister = createAction(
    REGISTER,
    ({ writer, name, description, price, images }) => ({
        writer,
        name,
        description,
        price,
        images,
    })
);

export const requestProductList = createAction(LIST_PRODUCT);
