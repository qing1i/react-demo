import React from "react";

export default class About extends React.Component {
  render() {
    console.log("About props", this.props);
    return <h3>About</h3>;
  }
}
