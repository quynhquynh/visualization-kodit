import React, { Component } from "react";
import axios from "axios";

import "./styles/_App.scss";
import filterFunc from "./utils";
import fields from "./fields";

import Form from "./containers/Form";
import PercentagePie from "./components/PercentagePie";
import StackedBar from "./components/StackedBar";
import SimpleLine from "./components/SimpleLine";
import SimpleArea from "./components/SimpleArea";

const { filter, checkEmpty, visualize } = filterFunc;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balcony: [],
      rooms: [],
      years: [],
      price_loc: [],
      loading: true
    };
    this.original = [];
  }

  async componentDidMount() {
    const url =
      "https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data";
    const response = await axios.post(url, {
      who_rules: "kodit.io"
    });
    this.original = [...this.original, ...response.data];
    const { original, state } = this;
    this.setState({
      loading: false,
      ...visualize(original, state)
    });
  }

  handleFilter = values => {
    const apt = [...this.original];
    const data = checkEmpty(values) ? apt : filter(apt, values);
    this.setState({
      ...visualize(data, this.state)
    });
  };

  render() {
    const { balcony, rooms, years, price_loc } = this.state;
    const { opts } = fields;
    return (
      <div className="App">
        <div>
          <Form filter={this.handleFilter} />
        </div>
        <div className="grid-45">
          <PercentagePie balcony={balcony} rooms={rooms} />
          <SimpleArea data={price_loc} />
          <StackedBar data={years} opts={opts} />
          <SimpleLine data={rooms} />
        </div>
      </div>
    );
  }
}

export default App;
