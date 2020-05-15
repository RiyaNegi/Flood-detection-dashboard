import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import DatePicker from "./Components/DatePicker";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="">
          <Navbar
            className="Navbar"
            variant="dark"
            style={{ justifyContent: "center", fontWeight: 600 }}
          >
            <Navbar.Brand href="#home">
              Early Flood Detection and Avoidance
            </Navbar.Brand>
          </Navbar>
        </div>
        <div className="App">
          <DatePicker />
        </div>
      </>
    );
  }
}

export default App;
