import React, { Component } from 'react';

import { Placeholder, List } from 'semantic-ui-react';

import { players } from './data.js';

function Players() {
  const {data, isLoading, isError } = players({refreshInterval: 1000});
  if (isError || isLoading ) return ""
  data.playerinfo.sort((a, b) => (a.score < b.score));
  return (
    <List size="big" celled>
    {data.playerinfo.map((e) => (
      <List.Item key={e.node}> <List.Header> {e.name} </List.Header> {e.score} </List.Item>
    ))}
    </List>
  )
}

export default Players;
