import React, { Component } from 'react';

import { Statistic, Placeholder } from 'semantic-ui-react';

import { server } from './data.js';

function Counter(props) { 
  const { data, isLoading, isError } = server({ refreshInterval: 1000 })
  if ( isLoading || isError ) return (
    <Statistic>
      <Statistic.Value> <Placeholder> <Placeholder.Image square={true}/> </Placeholder></Statistic.Value>
      <Statistic.Label> Players </Statistic.Label>
    </Statistic>
  )
  return (
    <Statistic>
      <Statistic.Value> {data.numberofplayers}</Statistic.Value>
      <Statistic.Label>{`Player${data.numberofplayers>1 ? 's' : ''} Online`}</Statistic.Label>
    </Statistic>
  )
}

export default Counter;
