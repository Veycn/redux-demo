import {all} from 'redux-saga/effects'
import CounterSaga from "./counter.saga";
import ModalSaga from "./modal.saga";

export default function* rootSaga() {
    yield all([
        CounterSaga(),
        ModalSaga()
    ])
}
