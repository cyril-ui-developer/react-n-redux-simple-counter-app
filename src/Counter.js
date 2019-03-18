import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import './Counter.css';

class Counter extends Component {

    // state = { count: 0 };

    increment =() => {
    // this.setState({
    //     count : this.state.count + 1
    // })
    // this.setState(prev =>{
    //     return{
    //         count : prev.count + 1
    //     }
    // })
    this.props.dispatch({type: "INCREMENT"})
    }

    decrement =() => {
        // this.setState({
        //     count : this.state.count - 1
        // })
        // this.setState(prev =>{
        //     return{
        //         count : prev.count - 1
        //     }
        // })
        this.props.dispatch({type: "DECREMENT"})
    }

    render(){
        return(
         <Fragment>
             <button onClick={ this.decrement}>- </button>
              <span className="counter-text">{ this.props.count }</span>
               <button onClick={ this.increment}> +</button>
         </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count
})

export default connect(mapStateToProps )(Counter);