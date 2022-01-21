import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store2/actions/counter.action'

function Counter(props) {
    console.log(props)
    return <div>
        {/*<button onClick={increment_async.bind(this, 20)}>异步 +</button>*/}
        {/*<button onClick={increment.bind(this, 5)}>+</button>*/}
        {/*<span>{ count }</span>*/}
        {/*<button onClick={decrement.bind(this, 5)}>-</button>*/}
    </div>
}

const mapStateToProps = state => ({
    count: state.count
})


const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
