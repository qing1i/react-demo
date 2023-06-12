import React from "react";
import axios from "axios";

export default class Search extends React.Component {
  handleSearch = () => {
    const {
      keywordEl: { value },
    } = this;
    // console.log(value);

    this.props.updateAppState({ isFirst: false, isLoading: true });

    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      (res) =>
        this.props.updateAppState({ isLoading: false, users: res.data.items }),
      (err) => this.props.updateAppState({ isLoading: false, err: err.message })
    );
  };

  render() {
    return (
      <section>
        <h3>Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keywordEl = c)}
            type="text"
            placeholder="enter the name you search "
          />
          &nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}
