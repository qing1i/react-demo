import React from "react";
import Count from "./containers/Count";
// import store from "./redux/store";
import Person from "./containers/Person";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Count store={store} /> */}
        <Count />
        <hr />
        <Person />
      </div>
    );
  }
}
