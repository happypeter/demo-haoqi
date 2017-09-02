import React, { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  {name: '3月', amount: 70},
  {name: '4月', amount: 100},
  {name: '5月', amount: 300},
  {name: '6月', amount: 200},
  {name: '7月', amount: 278}
]

class MyAreaChart extends Component {
  render () {
    let width = window.innerWidth - 40
    return (
      <div>
        <AreaChart width={width} height={200} data={data}
          margin={{top: 10, right: 10, left: -20, bottom: 0}}>
          <XAxis axisLine={false}
            tickLine={false}
            dataKey='name'
            stroke='#b8b4b3' />
          <YAxis axisLine={false}
            tickLine={false}
            stroke='#b8b4b3' />
          <Tooltip />
          <Area type='monotone' dataKey='amount' stroke='#84C7C4' fill='#91E1DD' />
        </AreaChart>
      </div>
    )
  }
}

export default MyAreaChart
