// export default function (store){
//     return function (next){
//         return function (action){
//
//         }
//     }
// }


export default store => next => action => {
    console.log(store)
    console.log(action)
    next(action)
}
