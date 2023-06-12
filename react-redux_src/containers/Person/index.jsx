import { nanoid } from "nanoid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const pObj = {
      id: nanoid(),
      name,
      age,
    };
    this.props.addPerson(pObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };

  render() {
    return (
      <div>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="input name"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="input age"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((p) => {
            return (
              <li>
                {p.name}-{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ persons: state.person }), {
  addPerson: createAddPersonAction,
})(Person);
