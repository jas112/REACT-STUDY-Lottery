import React, { Component } from 'react';
import LotteryBall from '../lotteryBall/LotteryBall';
import './Lottery.css';

export class Lottery extends Component {

    static defaultProps = {
        numberMax: 70,
        megaMax: 25,
        powerMax: 26
    };

    constructor(props){
    super(props);
    this.state = {
        megaNumbers: [],
        powerNumbers: []
    };
    this.generateMegaLotto = this.generateMegaLotto.bind(this);
    this.generatePowerLotto = this.generatePowerLotto.bind(this);
    }

    lottoBallHelper(lotto){
    let numObject = {};
    let lottoBall;

    if(lotto == 'mega'){
        lottoBall = Math.floor(Math.random()*this.props.megaMax + 1);
    }else{
        lottoBall = Math.floor(Math.random()*this.props.powerMax + 1);
    }

    numObject['number'] = lottoBall;
    numObject['ballType'] = `${lotto}Ball`;

    return numObject;
    }

    numberHelper(lotto){
    let lottoNumbers = [];
    for (let i = 0; i < 5; i++) {
        let numObject = {};
        let numValue = Math.floor(Math.random()*this.props.numberMax);
        numObject['number'] = numValue;
        numObject['ballType'] = 'regular-draw';
        lottoNumbers.push(numObject);
    }
    
    lottoNumbers.push(this.lottoBallHelper(lotto));
    
    return lottoNumbers;
    }

    generateMegaLotto(){
    this.setState({megaNumbers: this.numberHelper('mega')});
    }

    generatePowerLotto(){
    this.setState({powerNumbers: this.numberHelper('power')});
    }

  render() {
    return (
        <div className="Lottery">
            <h1>Lotter Draw Generator </h1>

            <div className="Lottery-number-display">
                {this.state.megaNumbers.map((mn) => (
                    <LotteryBall number={mn.number} ballType={mn.ballType}/>
                ))}
            </div>
            <button className='Lottery-button' onClick={this.generateMegaLotto}>Generate Mega Numbers</button>

            <div className="Lottery-number-display">
                {this.state.powerNumbers.map((pn) => (
                    <LotteryBall number={pn.number} ballType={pn.ballType}/>
                ))}
            </div>
            <button className='Lottery-button' onClick={this.generatePowerLotto}>Generate Power Numbers</button>

        </div>
    )
  }
}

export default Lottery