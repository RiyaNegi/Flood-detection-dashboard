import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { Component } from "react";
import data from "../data/data.json";
import FloodMap from "./FloodMap";
import River from "./River";
import PropTypes from "prop-types";
import FloodChart from "./FloodChart";

const today = new Date();

class DatePicker extends Component {
  state = {
    date: today,
    data: data[today.getDate()],
    river: ["Ganga", "Godavari", "Narmada"]
  };

  onChange = date => {
    let x = date.getDate();
    if (!data[x]) {
      return;
    }
    this.setState({ date: date, data: data[date.getDate()] });
  };

  onRadioChange = e => {
    const { value } = e.target;
    console.log(e.target.checked);
    if (e.target.checked) {
      this.setState({
        river: this.state.river.concat([value])
      });
    } else {
      this.setState({
        river: this.state.river.filter(val => val !== value)
      });
    }
  };

  render() {
    return (
      <div className="cop-container">
        <div className="cover-container">
          <div className="cox-container">
            <div className="container">
              <Calendar
                className={["calendar"]}
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>
            <div className="river container river-container">
              <River
                onRadioChange={this.onRadioChange}
                river={this.state.river}
              />
            </div>
          </div>
          <div key={this.state.data} className="container">
            <label style={{ fontWeight: 800 }}>
              Flood level Prediction of states in India (in %)
            </label>
            <FloodChart chartData={this.state.data} />
          </div>
        </div>
        <div className="container">
          <FloodMap data={this.state.data} river={this.state.river} />
        </div>
      </div>
    );
  }
}

export default DatePicker;
