import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import DatePicker from "./Components/DatePicker";
import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <Navbar
          bg="primary"
          variant="dark"
          style={{ justifyContent: "center", fontWeight: 600 }}
        >
          <Navbar.Brand href="#home">
            Early Flood Detection and Avoidance
          </Navbar.Brand>
        </Navbar>
      </div>
      <div className="App">
        <div>
          <DatePicker />
        </div>
      </div>
    </>
  );
}

export default App;
