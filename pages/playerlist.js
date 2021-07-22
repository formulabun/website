import React, { Component } from 'react';

import { Placeholder, List } from 'semantic-ui-react';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {playerData: undefined};

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(`/api/players`).then((res) => {
      res.json().then((o) => this.setState({playerData:o}));
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
    this.state.playerData?.playerinfo?.sort((a, b) => (a.score < b.score));
    return (
      <List celled style={{maxWidth:"20%"}}>
        {this.state.playerData?.playerinfo?.map((e) => (
          <List.Item key={e.node}> <List.Header> {e.name} </List.Header> {e.score} </List.Item>
        ))}
      </List>
    )
  }
}

export default Players;
