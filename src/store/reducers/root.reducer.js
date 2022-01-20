import { combineReducers } from 'redux'
import counterReducer from "./counter.reducer";
import modalReducer from "./modal.reducer";


// { counter: { count: 0 }, modal: { show: false } }
export default combineReducers({
    counter: counterReducer,
    modal: modalReducer
})
