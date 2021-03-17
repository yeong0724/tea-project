import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from '../action/userActionType';

function user(state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload };
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload };
        case AUTH_USER:
            return { ...state, user: action.payload };
        case LOGOUT_USER:
            return { ...state };
        default:
            return state;
    }
}
export default user;
