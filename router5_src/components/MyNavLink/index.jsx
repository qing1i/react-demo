import React from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends React.Component {
  render() {
    console.log("MyNavLink", this.props);
    return (
      // <NavLink className="list-group-item" {...this.props}>
      //   {this.props.children}
      // </NavLink>
      <NavLink className="list-group-item nav-link" {...this.props} />
    );
  }
}
