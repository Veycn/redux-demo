import {createAction} from 'redux-actions'

export const addProductToCart = createAction('addProductToCart')
export const addProductToLocalCart = createAction('addProductToLocalCart')


export const loadCarts = createAction('loadCarts')
export const saveCarts = createAction('saveCarts')

export const deleteProductFromCart = createAction('deleteProductFromCart')
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')

export const changeLocalProductNumber = createAction('changeLocalProductNumber')
export const changeServerProductNumber = createAction('changeServerProductNumber')
