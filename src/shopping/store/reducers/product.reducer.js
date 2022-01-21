import { handleActions as createReducer} from 'redux-actions'
import {saveProducts} from "../actions/product.action";

const initialState = []

export default createReducer({
    [saveProducts]: (state, action) => {
        return action.payload
    }
}, initialState)

