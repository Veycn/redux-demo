import {delay, put, takeEvery} from 'redux-saga/effects'
import {increment} from "../actions/counter.action";
import {INCREMENT_ASYNC} from "../const/counter.const";
import {SHOW_MODAL_ASYNC} from "../const/modal.const";
import {show} from "../actions/modal.actions";


function* increment_async_fn(action) {
    yield delay(2000)
    yield put(increment(action.payload))
}

function* showModal_async_fn() {
    yield delay(2000)
    yield put(show())
}

export default function* CounterSaga() {
    yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
    yield takeEvery(SHOW_MODAL_ASYNC, showModal_async_fn)
}

