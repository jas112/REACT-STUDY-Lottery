import React, { Component } from 'react';
import LotteryBall from '../lotteryBall/LotteryBall';
import LotteryNumberDraw from '../lotteryNumberDraw/LotteryNumberDraw';
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
        megaNumberArchive: [],
        powerNumbers: [],
        powerNumberArchive: []
    };
    this.generateMegaLotto = this.generateMegaLotto.bind(this);
    this.generatePowerLotto = this.generatePowerLotto.bind(this);
    }

    numberMaxSort(arr){
        console.log(`${arr}`);
        for (let idx = 0; idx < arr.length; idx++) {
            for (let ndex = idx+1 ; ndex < arr.length; ndex++) {
                if (arr[idx].number > arr[ndex].number) {
                    let temp = arr[ndex];
                    arr[ndex] = arr[idx];
                    arr[idx] = temp;
                }
            }
        }
        console.log(`${arr}`);
        return arr;
    }

    lottoBallHelper(lotto){
    let numObject = {};
    let lottoBall;

    if(lotto == 'mega'){
        lottoBall = Math.floor(Math.random()*this.props.megaMax) + 1;
    }else{
        lottoBall = Math.floor(Math.random()*this.props.powerMax) + 1;
    }

    numObject['number'] = lottoBall;
    numObject['ballType'] = `${lotto}Ball`;

    return numObject;
    }

    numberHelper(lotto){
    let lottoNumbers = [];
    for (let i = 0; i < 5; i++) {
        let numObject = {};
        let numValue = Math.floor(Math.random()*this.props.numberMax) + 1;
        numObject['number'] = numValue;
        numObject['ballType'] = 'regular-draw';
        lottoNumbers.push(numObject);
    }

    let sortedLottoNumbers = this.numberMaxSort(lottoNumbers);
    
    sortedLottoNumbers.push(this.lottoBallHelper(lotto));
    
    return sortedLottoNumbers;
    }

    generateMegaLotto(){
        let megaDrawValue = this.numberHelper('mega');
        this.setState({megaNumbers: megaDrawValue, megaNumberArchive: [...this.state.megaNumberArchive, megaDrawValue]});
    }

    generatePowerLotto(){
        let powerDrawValue = this.numberHelper('power');
        this.setState({powerNumbers: powerDrawValue,  powerNumberArchive: [...this.state.powerNumberArchive, powerDrawValue]});
    }

  render() {
    return (
        <div className="Lottery">
            <h1>Lotter Draw Generator</h1>
            <h2>MegaMillions</h2>
            <div className="Lottery-number-display">
                {this.state.megaNumbers.map((mn) => (
                    <LotteryBall number={mn.number} ballType={mn.ballType}/>
                ))}
            </div>
            <button className='Lottery-button' onClick={this.generateMegaLotto}>Generate Mega Numbers</button>
            <h2>PowerBall</h2>
            <div className="Lottery-number-display">
                {this.state.powerNumbers.map((pn) => (
                    <LotteryBall number={pn.number} ballType={pn.ballType}/>
                ))}
            </div>
            <button className='Lottery-button' onClick={this.generatePowerLotto}>Generate Power Numbers</button>
            <div className='Lottery-history'>
                <div className='Lottery-archive'>
                    <h2>MegaMillions</h2>
                    {this.state.megaNumberArchive.map((megaNum) => (
                        <LotteryNumberDraw lottoNumberValue={megaNum}/>
                    ))}
                </div>
                <div className='Lottery-archive'>
                    <h2>PowerBall</h2>
                </div>
            </div>
        </div>
    )
  }
}

export default Lottery