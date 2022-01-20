export default store => next => action => {
    console.log('test')
    next(action)
}
