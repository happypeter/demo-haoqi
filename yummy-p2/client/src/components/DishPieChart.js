import React, { Component } from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import styled from 'styled-components'

const data = [
  { name: '水分', value: 200 }, { name: '糖分', value: 100 },
  { name: '蛋白质', value: 100 }, { name: '脂肪', value: 130 }
]
const COLORS = ['#f4baba', '#e0cd84', '#91e1dd', '#a48ad4']

class DishPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  clickCell = (entry, index) => {
    let newItem = {
      name: entry.name,
      value: entry.value,
      color: COLORS[index % COLORS.length]
    }
    this.setState({
      items: [
        ...this.state.items,
        newItem
      ]
    })
  }

  render() {
    let width = window.innerWidth - 40
    return (
      <Wrap>
        <PieChart width={width} height={220} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={width / 2}
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
                  fill={COLORS[index % COLORS.length]} />)
              })
            }
          </Pie>
        </PieChart>
        <div>
          {
            this.state.items.map(item => (
              <div key={item.name} className='legend'>
                <div className="legend-name" style={{ 'background': item.color }}>
                  {item.name}
                </div>
                <div className="legend-value" style={{ 'border': `3px solid ${item.color}` }}>
                  {item.value} mg
                </div>
              </div>
            ))
          }
        </div>
      </Wrap>
    )
  }
}

export default DishPieChart

const Wrap = styled.div`
  .legend {
    display: flex;
    margin: 10px;
  }

  .legend-name {
    line-height: 40px;
    width: 120px;
    text-align: center;
    color: white;
    border-radius: 7px 0 0 7px;
  }

  .legend-value {
    color: #212121;
    height: 40px;
    border: 3px solid red;
    flex-grow: 1;
    border-radius: 0 7px 7px 0;
    line-height: 36px;
    text-indent: 15px;
  }
`
