import React, { Component } from 'react'

class ScoreKeeper extends Component {
    constructor(props){
        super(props);
        this.state = {score: 0};
        this.incrementScore = this.incrementScore.bind(this);
        this.tripleIncrementScore = this.tripleIncrementScore.bind(this);
    }

    incrementScore(e){
        let newScoreValue = this.state.score + 1;
        this.setState({score: newScoreValue});
    }

    tripleIncrementScore(e){
        console.log('tripleIncrementScore...');
    }

  render() {
    return (
      <div>ScoreKeeper</div>
    )
  }
}

export default  ScoreKeeper;
