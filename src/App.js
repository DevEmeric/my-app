import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp.js"
import Quote from "./Quote.js";
import Quotes from "./Quotes.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      working: false
    }
    
  }

  work = () => {
    this.setState({ working: !this.state.working })
  }


  render() {
  

    let logoChange = {
      opacity: 0.3
    }

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"  style={this.state.working ? logoChange : {}}  alt="logo" /> 
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp on={true} />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <button className="bouton" onClick={this.work} >WORK</button>
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        /> 
        <section>
          <Quotes />
        </section>
      </div>
    );
  }
}

export default App
