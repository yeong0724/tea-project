import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';

export default function createRequestSaga(type, request) {
    console.log('type');
    console.log(type);

    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(startLoading(type)); //Loading start
        try {
            const response = yield call(request, action.payload);

            console.log('createRequestSaga');

            console.log('응답하라2021', response);
            yield put({
                type: SUCCESS,
                payload: response.data,
                meta: response,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
            console.log('에러냐?', e);
        }
        yield put(finishLoading(type));
    };
}
