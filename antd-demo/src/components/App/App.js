import React, { Component } from 'react';
import './app.css';
import Button from 'antd/lib/button';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Button type="primary">购买</Button>
        <Button>取消</Button>
      </div>
    );
  }
}

export default App;
