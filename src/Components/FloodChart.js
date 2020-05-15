import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class FloodChart extends Component {
  render() {
    const data = [
      {
        name: "WB",
        Ganga: this.props.chartData.Ganga.WB,
        Godavari: 0,
        Narmada: 0
      },
      {
        name: "BR",
        Ganga: this.props.chartData.Ganga.BR,
        Godavari: 0,
        Narmada: 0
      },
      {
        name: "UK",
        Ganga: this.props.chartData.Ganga.UK,
        Godavari: 0,
        Narmada: 0
      },
      {
        name: "UP",
        Ganga: this.props.chartData.Ganga.UP,
        Godavari: 0,
        Narmada: 0
      },
      {
        name: "JH",
        Ganga: this.props.chartData.Ganga.JH,
        Godavari: 0,
        Narmada: 0
      },
      {
        name: "MH",
        Ganga: this.props.chartData.Ganga.MH,
        Godavari: 0,
        Narmada: this.props.chartData.Narmada.MH
      },
      {
        name: "CT",
        Ganga: 0,
        Godavari: this.props.chartData.Godavari.CT,
        Narmada: 0
      },
      {
        name: "TN",
        Ganga: 0,
        Godavari: this.props.chartData.Godavari.TN,
        Narmada: 0
      },
      {
        name: "AP",
        Ganga: 0,
        Godavari: this.props.chartData.Godavari.AP,
        Narmada: 0
      },
      {
        name: "OD",
        Ganga: 0,
        Godavari: this.props.chartData.Godavari.OD,
        Narmada: 0
      },
      {
        name: "MP",
        Ganga: 0,
        Godavari: 0,
        Narmada: this.props.chartData.Narmada.MP
      },
      {
        name: "GJ",
        Ganga: 0,
        Godavari: 0,
        Narmada: this.props.chartData.Narmada.GJ
      }
    ];
    return (
      <LineChart
        width={680}
        height={255}
        data={data}
        margin={{
          right: 10,
          left: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Ganga"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Godavari"
          stroke="#82ca9d"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Narmada"
          stroke="yellow"
          strokeWidth={2}
        />
      </LineChart>
    );
  }
}
