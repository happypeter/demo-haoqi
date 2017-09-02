import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group' // ES6

import { PieChart, Pie, Cell } from 'recharts';
import './pie-chart.css'

const data = [{name: '水分', value: 200}, {name: '糖分', value: 100},
                  {name: '蛋白质', value: 100}, {name: '脂肪', value: 130}];
const COLORS = ['#f4baba', '#e0cd84', '#91e1dd', '#a48ad4'];


class MyPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      c: 'a'
    }
  }

  clickCell = (entry, index) => {
    let newItems = this.state.items.slice();
    newItems.push({
      name: entry.name,
      value: entry.value,
      color: COLORS[index % COLORS.length]
    })
    this.setState({
      items: newItems
    });

  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item.color} className="legend">
        <div className="legend-name" style={{ 'background' : item.color}}>
          {item.name}
        </div>
        <div className="legend-value" style={{ 'border' : `3px solid ${item.color}`}}>
          {item.value} mg
        </div>
      </div>
    ));

    let width = window.innerWidth - 40

    return (
      <div>
        <PieChart width={width} height={220} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={width/2}
          cy={110}
          dataKey={'value'}
          labelLine={false}
          outerRadius={80}
          innerRadius={40}
          fill="#8884d8"
        >
          {
            data.map((entry, index) => {
              return (<Cell
                       key={index}
                      onClick={() => this.clickCell(entry, index)}
                      fill={COLORS[index % COLORS.length]}/>)
            })
          }
        </Pie>
        </PieChart>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default MyPieChart
