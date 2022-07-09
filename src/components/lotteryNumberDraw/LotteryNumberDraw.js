import React, { Component } from 'react';
import './LotteryNumberDraw.css';

export class LotteryNumberDraw extends Component {
  render() {

    return (
      <div className='LotteryNumberDraw'>
        {this.props.lottoNumberValue.map((num) => (
            <div className={`LotteryNumberDraw-numberValue LotteryNumberDraw-${num.ballType}`}>{num.number}</div>
        ))}
      </div>
    )
  }
}

export default LotteryNumberDraw;