import React from 'react';
import family from './family.jpeg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: "choices invisible",
      correct: 0,
      display: false,
      gameIsWon: "invisible",
      index: 0,
      minutes: 0,
      seconds: "00"
    };
    this.getCoords = this.getCoords.bind(this);
    this.evaluateChoice = this.evaluateChoice.bind(this);
  }

  componentDidMount () {
    let start = new Date();
    let seconds = 0;
    let minutes = 0;
    let totalSeconds = 0;
    let timer = setInterval(() => {
      totalSeconds = Math.round((new Date() - start)/1000);
      minutes = Math.floor(totalSeconds/60);
      seconds = totalSeconds - (minutes * 60);
      if(seconds < 10) {
        seconds = "0" + String(seconds);
      }
      this.setState({minutes: minutes});
      this.setState({seconds: seconds});
      if(this.state.correct === 7) {
        clearInterval(timer);
        this.setState({gameIsWon: "winMessage"});
      }
    }, 1000);
  }

  evaluateChoice(event) {
    let index = this.state.index;
    let choice = event.target.value;
    let correct = false;
    let count = this.state.correct;
    if(index === 1 && choice ==="Grandfather"){
      let cell = document.getElementById("1");
      cell.classList.remove("selected");
      cell.classList.add("correct");
      correct = true;
      count += 1;
      this.setState({correct: count});
    }
    if(index === 2 && choice ==="Mother"){
      let cell = document.getElementById("2");
      cell.classList.remove("selected");
      cell.classList.add("correct");
      correct = true;
      count += 1;
      this.setState({correct: count});
    }
    if(index === 3 && choice ==="Father"){
      let cell = document.getElementById("3");
      cell.classList.remove("selected");
      cell.classList.add("correct");
      correct = true;
      count += 1;
      this.setState({correct: count});
    }
    if(index === 4 && choice ==="Grandmother"){
      let cell = document.getElementById("4");
      cell.classList.remove("selected");
      cell.classList.add("correct");
      correct = true;
      count += 1;
      this.setState({correct: count});
    }
    if(index === 6 && choice ==="Baby"){
      let cell = document.getElementById("6");
      cell.classList.remove("selected");
      cell.classList.add("correct");
      correct = true;
      count += 1;
      this.setState({correct: count});
    }
    if(index === 7 && choice ==="Brother"){
      let cell = document.getElementById("7");
      cell.classList.remove("selected");
      cell.classList.add("correct");
      correct = true;
      count += 1;
      this.setState({correct: count});
    }
    if(index === 8 && choice ==="Sister"){
      let cell = document.getElementById("8");
      cell.classList.remove("selected");
      cell.classList.add("correct");
      correct = true;
      count += 1;
      this.setState({correct: count});
    }
    if(correct === false && document.getElementById(String(index)).classList.contains("correct") === false) {
      let cell = document.getElementById(String(index));
      cell.classList.remove("selected");
      cell.classList.add("incorrect");
    }
  }

  getCoords(event) {
    let index = Number(event.target.id);
    const cells = Array.from(document.querySelectorAll(".selected"));
    cells.forEach(cell => cell.classList.remove("selected"));
    const moreCells = Array.from(document.querySelectorAll(".incorrect"));
    moreCells.forEach(moreCell => moreCell.classList.remove("incorrect"));
    if(!(event.target.classList.contains("correct"))){
      event.target.classList.add("selected");
    }
    this.setState({display: true});
    this.setState({index: index});
    this.setState({choices: "choices visible"});
  }

  render () {
    return (
      <div className="App">
        <Title />
        <div className={this.state.gameIsWon}>Your Time {this.state.minutes}:{this.state.seconds}</div>
        <div className="timer">{this.state.minutes}:{this.state.seconds}</div>
        <select className={this.state.choices} onChange={this.evaluateChoice}>
          <option>Which Family Member is it?</option>
          <option value="Grandfather">Grandfather</option>
          <option value="Grandmother">Grandmother</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Brother">Brother</option>
          <option value="Sister">Sister</option>
          <option value="Baby">Baby</option>
        </select>
        <div className="outsideWrapper">
          <div className="insideWrapper">
              <img src={family} className="coveredImage" alt=""/>
              <div className="coveringCanvas" onClick={this.getCoords}>
                <div className="cell" id="1"></div>
                <div className="cell" id="2"></div>
                <div className="cell" id="3"></div>
                <div className="cell" id="4"></div>
                <div className="cell" id="5"></div>
                <div className="cell" id="6"></div>
                <div className="cell" id="7"></div>
                <div className="cell" id="8"></div>
                <div className="cell" id="9"></div>
                <div className="cell" id="10"></div>
                <div className="cell" id="11"></div>
                <div className="cell" id="12"></div>
              </div>
          </div>
        </div>
        
      </div>
    );
    }
}

function Title() {
  return (
    <div>
      <div id="title">
        <h1>Photo-Tagger</h1>
      </div>
    </div>
  );
}

export default App;
