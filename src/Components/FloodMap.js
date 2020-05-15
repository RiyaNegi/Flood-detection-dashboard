import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";
import { object } from "prop-types";

class FloodMap extends Component {
  constructor(props) {
    super(props);
    this.x = React.createRef();
  }

  displayData(props) {
    let displayData = {};
    for (let i in this.props.river) {
      let val = this.props.data[this.props.river[i]];
      displayData = { ...displayData, ...val };
    }
    return displayData;
  }

  componentDidUpdate() {
    const map = this.x.current.getMapObject();
    map.series.regions[0].setValues(
      this.colorStates(this.displayData(this.props))
    );
  }

  componentDidMount() {
    const map = this.x.current.getMapObject();
    map.series.regions[0].setValues(
      this.colorStates(this.displayData(this.props))
    );
  }

  colorStates(data) {
    const map = this.x.current.getMapObject();
    const palette = [
      "white",
      "#78c5ff",
      "#56a1d8",
      "#4a90c4",
      "#5ab8ff",
      "#336490",
      "#205b90",
      "#0c4f8c",
      "#053e71",
      "#153450",
      "#04213c"
    ];

    const colorsObj = {};
    for (let key in map.regions) {
      let floodLevel = 0;
      key = key.substring(3);
      if (data[key]) {
        floodLevel = data[key];
      }
      colorsObj["IN-" + key] = palette[Math.floor(floodLevel / 10)];
    }
    return colorsObj;
  }

  render() {
    return (
      <div style={{ width: 580, height: 600 }}>
        <VectorMap
          map={"in_mill"}
          backgroundColor="#b0e0e6"
          ref={this.x}
          containerStyle={{
            width: "96%",
            height: "100%"
          }}
          containerClassName="map"
          onRegionTipShow={(e, el, code) => {
            el.html(el.html());
          }}
          series={{
            markers: [
              {
                attribute: "fill",
                scale: ["#C8EEFF", "#04213c"],
                normalizeFunction: "polynomial",
                values: [20, 30, 40, 50, 60, 70, 80],
                legend: {
                  vertical: true,
                  cssClass: "jvectormap-legend-icons",
                  title: "Flood<br/>Levels<br/>(in %)"
                }
              }
            ],
            regions: [
              {
                attribute: "fill"
              }
            ]
          }}
          labels={{
            regions: {
              render: function(code) {
                var doNotShow = ["IN-DD", "IN-DN"];

                if (doNotShow.indexOf(code) === -1) {
                  return code.split("-")[1];
                }
              },
              offsets: function(code) {
                return {
                  MH: [-30, -20],
                  KA: [-20, 10],
                  AP: [-30, 0],
                  MP: [0, 10],
                  WB: [0, 50],
                  CT: [-30, 0]
                }[code.split("-")[1]];
              }
            }
          }}
        />
      </div>
    );
  }
}

export default FloodMap;
