import React from "react";
// import axios from "axios";
import Search from "./components/Search";
import List from "./components/List";

// export default class App extends React.Component {
//   getStudentData = () => {
//     axios.get("/api/m1/2686731-0-default/studentlist").then(
//       (res) => console.log(res.data),
//       (err) => console.log(err)
//     );
//   };
//   render() {
//     return <button onClick={this.getStudentData}>点击获取数据</button>;
//   }
// }

export default class App extends React.Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  };

  // saveUsers = (users) => {
  //   this.setState({ users });
  // };

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
