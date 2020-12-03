import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    total: "",
    tipPercent: "",
    partySize: "",
    totalTip: "",
    tipPP: ""
  }

  getTip = (event) => {
    event.preventDefault();
    let tip = parseFloat(this.state.total * (this.state.tipPercent / 100)).toFixed(2)
    let totalTipPP = parseFloat(tip / this.state.partySize).toFixed(2)
    this.setState({
      totalTip: tip,
      tipPP: totalTipPP
    })
  }

  handleTotal = (event) => {
    this.setState({
      total: event.target.value
    })
  }

  handleTip = (event) => {
    this.setState({
      tipPercent: event.target.value
    })
  }

  handlePartySize = (event) => {
    this.setState({
      partySize: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Tip Calculator</h1>
        <form onSubmit={this.getTip}>
          <label>
            Total
            <input type="text" value={this.state.total} onChange={this.handleTotal} />
          </label>
          <label>
            Tip %
            <input type="text" value={this.state.tipPercent} onChange={this.handleTip} />
          </label>
          <label>
            Party Size
            <input type="text" value={this.state.partySize} onChange={this.handlePartySize} />
          </label>
          <input id="submit" type="submit" />
        </form>
        <p>Tip: ${this.state.totalTip}</p>
        <p>Tip Per Person: ${this.state.tipPP}</p>
      </div>
    );
  }
}

export default App;
