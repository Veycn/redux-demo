import {delay, put, takeEvery} from 'redux-saga/effects'
import {SHOW_MODAL_ASYNC} from "../const/modal.const";
import {show} from "../actions/modal.actions";


function* showModal_async_fn() {
    yield delay(2000)
    yield put(show())
}

export default function* ModalSaga() {
    yield takeEvery(SHOW_MODAL_ASYNC, showModal_async_fn)
}

