import React, { Component } from 'react';
import './LotteryBall.css';

export class LotteryBall extends Component {

  render() {

    let ballClass;

    if(this.props.ballType == 'megaBall'){
      ballClass = 'LottoBall LottoBall-mm-sBall';
    }else if(this.props.ballType == 'powerBall'){
      ballClass = 'LottoBall LottoBall-pb-sBall';
    }else{
      ballClass = 'LottoBall';
    }

    return (
      
      <div className={ballClass}>
        {this.props.number !== null ? (
          <div className="LottoBall-number">{this.props.number}</div>
        ) : (
          <div className="LottoBall-number"></div>
        )}
        {/* <div className="LottoBall-number">{this.props.number}</div> */}
      </div>
      
    )
  }
}

export default LotteryBall