import React, { Component } from 'react';

import { Statistic, Placeholder } from 'semantic-ui-react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(`/api/server`).then((res) => {
      res.json().then((o) => this.setState({serverData:o}));
    });
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => 
      this.fetchData, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if( ! this.state.serverData )
      return (
        <Statistic>
          <Statistic.Value> <Placeholder> <Placeholder.Image square={true}/> </Placeholder></Statistic.Value>
          <Statistic.Label> Players </Statistic.Label>
        </Statistic>
        
      );
    return (
      <Statistic>
        <Statistic.Value> {this.state.serverData.numberofplayers}</Statistic.Value>
        <Statistic.Label> Players Online </Statistic.Label>
      </Statistic>
    )
  }
}

export default Counter;
