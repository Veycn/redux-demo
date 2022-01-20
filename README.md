## Redux
`redux`  是一个 `JavaScript` 状态容器，提供可预测化的状态管理。
## 核心概念
`redux` 中主要是四个核心概念，他们之间的关系如下：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/12895015/1642669927845-50f6253b-9d4d-401d-ace6-d579291158fc.png#clientId=uc57a4837-924a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=233&id=uf9f4c9fd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=466&originWidth=1144&originalType=binary&ratio=1&rotation=0&showTitle=false&size=107926&status=done&style=none&taskId=u8be494fc-abbb-4c60-859e-855a747254c&title=&width=572)
### store
存储状态的容器，是一个 `JavaScript` 对象。
### reducers
`reducer` 是一个函数，用来向 `store` 中存储或者更新状态。`reducer` 返回什么，`store` 中就存储什么。
### actions
`action` 是一个对象，对象内部必须要有一个 `type` 属性，用来标记一个操作，`type`属性的值是开发者自己定义的，用来描述对状态进行怎么样的操作。
### view
视图，也就是 `html` 页面。
## 工作流程
视图中的状态都来自 `store` 。如果视图需要更新状态，必须要先触发（dispatch） `action`，由 `action`  去执行`reducer`再提交相关的状态更新到 `store`，视图再拿到新的状态，这也是 `react` 单向数据流特征的体现。

`dispatch` 应是唯一改变 state 的方式。



## 使用
> 如果你的项目足够简单，你可能并不需要它
### 核心 API

```javascript

// 1、创建一个初始状态对象
const initialState = {
    count: 0
}

// 2、创建 reducer 函数
function reducer (state = initialState, action){
    switch (action.type){
        case 'increment': 
            return {
                count: state.count + 1
            }
        case 'decremet':
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

// 3、创建一个 store, store 需要传递一些参数
// - reducer
// - initialState
// - enhancer
const store = Redux.createStore(reducer)

// 获取 store 中的状态
store.getState()

// 4、定义 action
const increment = {
    type: 'increment'
}
const decrement = {
    type: 'decrement'
}

// 5、触发action 分发事件
store.dispatch(increment)
store.dispatch(decrement)


// 6、订阅 store, 当 state 中的数据发生改变之后，会运行订阅 store 时传入的函数
store.subscribe(() => {
    console.log(store.getState())
})
```

当 `store`  被创建的时候，会触发一次默认的 `action` ，用来存储初始状态。


## 解决了什么问题

在React中组件通信的数据流是单向的, 顶层组件可以通过props属性向下层组件传递数据,
而下层 组件不能向上层组件传递数据, 要实现下层组件修改数据, 需要上层组件传递修改数据
的方法到下层 组件. 当项目越来越大的时候, 组件之间传递数据变得越来越困难.

![img.png](./imgs/img.png)

使用Redux管理数据，由于Store独立于组件，使得数据管理独立于组件，解决了组件与组件之间传递数据困难的问题。
![img_1.png](./imgs/img_1.png)


## 与 React 结合

与 `react`  结合 需要安装 `react-redux redux`  这两个包。使用方式如下：

```javascript

```

### Provider
在外层用 Provider 包裹，并提供 store 属性
### connect
1、`connect` 可以代理订阅 `store` ，`store`  中的状态发生改变的时候，会重新渲染组件
2、`connect` 可以将 `store`  中的状态映射到 `props`  上
3、`connect` 之后可以拿到 `dispatch`  方法

#### 映射 props 和 dispatch

将 store 中的状态和 dispatch 映射给组件的时候，需要定义属性映射的规则，具体方式如下：

```javascript
const mapStateToProps = state => ({
    count: state.count
})

const mapDispatchToProps = disptach => ({
    increment(){
        disptach({ type: 'increment' })
    },
    decrement(){
        disptach({ type: 'decrement' })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```


## redux 案例

借助 `bindActionCreators` 以及 `combineReducers` 根据模块拆分 `store` 

[这里查看详细代码](https://github.com/Veycn/redux-demo/tree/master/src/store)


[Redux 文档](https://www.redux.org.cn/docs/recipes/reducers/PrerequisiteConcepts.html)
