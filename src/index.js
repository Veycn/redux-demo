import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/counter";

import { Provider } from 'react-redux'
import { store } from './store/index'


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Counter count={store.getState().count}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

