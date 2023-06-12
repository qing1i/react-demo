import React from "react";
import qs from "qs";

const data = [
  { id: "01", content: "1" },
  { id: "02", content: "2" },
  { id: "03", content: "3" },
];

export default class Content extends React.Component {
  render() {
    console.log(this.props);
    // 1
    const { id, title } = this.props.match.params;

    // 2
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));

    // 3
    // const { id, title } = this.props.location.state || {};

    const findResult =
      data.find((obj) => {
        return obj.id === id;
      }) || {};

    return (
      <ul>
        <li>ID：{id}</li>
        <li>TITLE：{title}</li>
        <li>CONTENT：{findResult.content}</li>
      </ul>
    );
  }
}
