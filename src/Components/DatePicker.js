import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { Component } from "react";
import data from "../data/data.json";
import FloodMap from "./FloodMap";
import River from "./River";

const today = new Date();

class DatePicker extends Component {
  state = {
    date: today,
    data: data[today.getDate()],
    river: []
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
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="calendar">
              <Calendar onChange={this.onChange} value={this.state.date} />
            </div>
            <div>
              <River
                onRadioChange={this.onRadioChange}
                river={this.state.river}
              />
            </div>
          </div>
          <div>
            <FloodMap data={this.state.data} river={this.state.river} />
          </div>
        </div>
      </div>
    );
  }
}

export default DatePicker;
