import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
        storedResults: state.results.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrement: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd: () => dispatch({type: actionTypes.ADD, payload: 5}),
        onSubstract: () => dispatch({type: actionTypes.SUBSTRACT, payload: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, payload: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, payload: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);