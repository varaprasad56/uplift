import React, { Component } from "react";
class Counter extends Component {
  getCounterClass = () => {
    if (this.props.counter.value > 0) {
      return "badge badge-primary m-2";
    } else {
      return "badge badge-secondary m-2";
    }
  };
  getDecrementClass = () => {
    return !(this.props.counter.value > 0);
  };
  render() {
    return (
      <div className="row align-items-center">
        <span className={this.getCounterClass()}>
          {this.props.counter.value}
        </span>
        <button
          className="btn btn-info m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-info m-2"
          disabled={this.getDecrementClass()}
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <button className="btn btn-danger m-2"
        onClick={() => this.props.onDelete(this.props.counter)}
        >X</button>
      </div>
    );
  }
}

export default Counter;
