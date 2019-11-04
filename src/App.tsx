import React from 'react';
import './App.css';

type AppState = {
  countVal ?: number
}

class App extends React.Component<{}, AppState> {
  state = {
    countVal : 0
  }
  handleClickPlus = () => {
    this.setState({countVal : this.state.countVal+1})
  }
  handleClickMinus = () => {
    this.setState({countVal :  this.state.countVal-1})
  }
  handleClickPlusFive = () => {
    this.setState({countVal :  this.state.countVal+5})
  }
  render(){
    const countVal = this.state.countVal;
    return (
      <div className="App">
        <div>count value : {countVal}</div>
        <div className="btn-group">
          <button className="btm-ind" onClick={this.handleClickMinus}>-</button>
          <button className="btm-ind" onClick={this.handleClickPlus}>+</button>
          <button className="btm-ind" onClick={this.handleClickPlusFive}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
