export default (store) => next => action => {
    // 只关心执行的是不是异步操作
    // 同步操作 action 是一个对象
    // 异步操作 action 则是一个 函数，把异步操作写在函数中，传递进来

    if (typeof action === 'function'){
        return action(store.dispatch)
    }
    next(action)
}
