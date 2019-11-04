import React, { Component } from 'react'
import {connect} from 'react-redux';
import {increment, decrement, increment_5, decrement_5, increment_async} from '../reducers/action'
import  './Counter.css';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount(){
  //   console.log("-->>", this.props)
  // }
  render() {
    console.log("props-->>", this.props)
    const { value, increment, decrement, increment_5, decrement_5, increment_async } = this.props;
    return (
      <>
      <div className="counter-body">
        <div className="val">
          Clicked value: {value} 
        </div>
        <br/>
        <div className="btn-group">
          <button className="btn" onClick={increment}>+</button>
          <button  className="btn" onClick={decrement}>-</button>
          <button  className="btn" onClick={increment_5}>Plus 5</button>
          <button  className="btn" onClick={decrement_5}>Minus 5</button>
          <button  className="btn" onClick={increment_async}>+ ASYNC</button>
        </div>
      </div>
      </>
    )
  }
}
function mapStateToProps(state) {
  return { value: state }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(),
//     decrement: () => dispatch({ type: 'DECREMENT' })
//   }
// }
const mapDispatchToProps = {
  increment,
  decrement,
  increment_5,
  decrement_5,
  increment_async
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)