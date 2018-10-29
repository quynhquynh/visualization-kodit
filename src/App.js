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

const {
  filterLoc,
  filterSize,
  filterPrice,
  filterRoom,
  filterYear,
  filterOptions,
  calcPieChart,
  calcPieLineChart,
  calcBarChart,
  calcAreaChart
} = filterFunc;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
      balcony: [],
      rooms: [],
      years: [],
      price_room: [],
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

    const { balcony, rooms, years, price_room, price_loc } = this.state;

    // pie chart
    const copy_balcony = calcPieChart(this.original, balcony);

    // pie chart, line chart
    const { copy_rooms, copy_price_room } = calcPieLineChart(
      this.original,
      rooms,
      price_room
    );

    // bar chart
    const copy_years = calcBarChart(this.original, years, fields);

    // area chart
    const copy_price_loc = calcAreaChart(this.original, price_loc);

    this.setState({
      loading: false,
      balcony: copy_balcony,
      rooms: copy_rooms,
      years: copy_years,
      price_room: copy_price_room,
      price_loc: copy_price_loc
    });
  }

  handleFilter = values => {
    const {
      apartments,
      balcony,
      years,
      rooms,
      price_room,
      price_loc
    } = this.state;
    let apt = [...this.original];
    let result = [];
    const {
      location,
      room_count,
      built_year,
      size_sqm,
      price,
      options
    } = values;

    if (location) {
      result = filterLoc(apt, location);
    }
    if (size_sqm.min || size_sqm.max) {
      result = filterSize(apt, result, size_sqm);
    }
    if (price.min || price.max) {
      result = filterPrice(apt, result, price);
    }
    if (room_count.length) {
      result = filterRoom(apt, result, room_count);
    }
    if (built_year.length) {
      result = filterYear(apt, result, built_year);
    }
    if (options.length) {
      result = filterOptions(apt, result, options);
    }

    // for filter only
    const copy_apartments = [...apartments];
    copy_apartments.push(result);

    // pie chart
    const copy_balcony = calcPieChart(result, balcony);

    // pie chart, line chart
    const { copy_rooms, copy_price_room } = calcPieLineChart(
      result,
      rooms,
      price_room
    );

    // bar chart
    const copy_years = calcBarChart(result, years, fields);

    // area chart
    const copy_price_loc = calcAreaChart(result, price_loc);

    this.setState({
      apartments: copy_apartments,
      balcony: copy_balcony,
      rooms: copy_rooms,
      years: copy_years,
      price_room: copy_price_room,
      price_loc: copy_price_loc
    });
  };

  render() {
    const { balcony, rooms, years, price_room, price_loc } = this.state;
    const { opts } = fields;
    return (
      <div className="App">
        <div>
          <Form filter={this.handleFilter} />
        </div>
        <div>
          <PercentagePie balcony={balcony} rooms={rooms} />
          <SimpleArea data={price_loc} />
          <StackedBar data={years} opts={opts} />
          <SimpleLine data={price_room} />
        </div>
      </div>
    );
  }
}

export default App;
