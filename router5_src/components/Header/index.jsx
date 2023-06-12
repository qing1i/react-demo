import React from "react";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  render() {
    console.log("Header", this.props);
    return (
      <div>
        <div className="row my-4">
          <h2>React Router Demo</h2>
        </div>
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
      </div>
    );
  }
}

export default withRouter(Header);
