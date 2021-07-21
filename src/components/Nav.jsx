import React, { Component } from "react";
class Nav extends Component {
  constructor(props) {
    super(props);
  }
  getNavItemsClasses() {
      if(this.props.activeCounters>0){
          return "badge m-1 badge-light";
      }
      else {
          return "badge m-1 badge-warning";
      }
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <button type="button" className="btn btn-primary">
         Counters 
          <span className={this.getNavItemsClasses()}>{this.props.activeCounters}</span>
        </button>
      </nav>
    );
  }
}

export default Nav;
