let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 4,
  },
];

'using strict';
//import React from "react";
//import ReactDOM from "react-dom"; 

class TemporalComponent extends React.Component {

  render() {
    return (
      <div>
        {(new Date()).toLocaleTimeString()}
      </div>
    );
  }

}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  render() {
    const { title } = this.props;
    const start = (e) => {
      this.startTimer();
    }
    const stop = (e) => {
      this.stopTimer();
    }
    return (
      <div>
        <h2> {title} </h2>

        
        <button onClick={start}> start </button>
<button onClick={stop}> stop </button>

        <p> {this.state.date.toLocaleTimeString()}</p>

        <span> <TemporalComponent /> </span>
      </div>
    );
  }
  // componentDidMount
  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  //componentWillUnmount
  stopTimer() {
    clearInterval(this.timer);
  }
}


class Modal {
  constructor() {

    this.inputValue = null;
    this.render = undefined;
    this.player = PLAYERS;
    this.callback = null;
  }


  subscribe(render) {
    this.callback = render;
  }

  notify() {
    this.callback();
  }
  inform() {
    console.log(this.other.map(e => e.text));
    this.render();
  }
  addPlayer(text) {
    this.other.push({
      id: Utils.uuid(),
      text: text,
      completed: false
    });
    this.inform();
  }
  updatePlayer(index, todo) {
    this.other[index] = todo;
    this.inform();
  }
}




const Header = (props) => {
  let points = props.players.map((e) => e.score).reduce((a, b) => { return a + b });
  return (
    <div className="header">

      <table className="stats">
        <tr><td>PLAYERS:</td>{props.players.length}</tr>
        <tr><td>TOTAL:</td>{points}</tr>
      </table>
      <h1>SCOREBOARD</h1>

      <div className="stopwatch">
        <h2>STOPWATCH</h2>
        <div className="stopwatch-time" id="contador">
          <Timer/>
        </div>
       

      </div>
    </div>
  )
}
const PlayerList = (props) => {
  return (<div>{
    props.players.map((data, index) => {
      return (
        <div className="player">
          <div className="player-name">{data.name}</div>
          <div className="player-socore counter">
            <button className="counter-action decrement btn">-</button>
            <p className="counter-score">{data.score}</p>
            <button className="counter-action increment btn">+</button>
          </div>
        </div>

      )
    })} </div>)
}

let PlayerForm = React.createClass({
  render: function () {
    return (
      <div className="add-player-form">
        <form>
          <p><input type="text" placeholder="ENTER A NAME"></input></p>
          <p><input type="submit" value="Add Player"></input></p>
        </form>
      </div>
    )
  }
})


const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}




ReactDOM.render(<Application title="Scoreboard" players={PLAYERS} />, document.getElementById('container'));