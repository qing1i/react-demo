import React, { Component } from "react";
import axios from "axios";
import { Input, Table, Popconfirm } from "antd";
const { Search } = Input;

class App extends Component {
  state = {
    list: [],
    columns: [
      { title: "任务编号", dataIndex: "id", key: "id" },
      { title: "任务名称", dataIndex: "name", key: "name" },
      { title: "任务描述", dataIndex: "desc", key: "desc" },
      {
        title: "操作",
        render: (_, record) => (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => this.handleDelete(_, record)}
          >
            <a href="javascript:">Delete</a>
          </Popconfirm>
        ),
      },
    ],
  };

  onSearch = async (value) => {
    console.log(value);
    const res = await axios.get(
      `https://mock.apifox.cn/m1/2911126-0-default/list/?q=${value}`
    );
    this.setState({
      list: res.data,
    });
  };

  handleDelete = async (_, record) => {
    await axios.delete(
      `https://mock.apifox.cn/m1/2911126-0-default/list/${record.id}`
    );
    this.loadList();
  };

  loadList = async () => {
    const res = await axios.get(
      "https://mock.apifox.cn/m1/2911126-0-default/list"
    );
    console.log(res);
    this.setState({
      list: [res.data],
    });
  };

  componentDidMount() {
    this.loadList();
  }

  render() {
    return (
      <div className="container">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />
        <Table dataSource={this.state.list} columns={this.state.columns} />;
      </div>
    );
  }
}

export default App;
