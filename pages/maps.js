import {React, useReducer} from 'react';
import _ from 'lodash';

import { maps } from '../data.js';
import 'semantic-ui-css/semantic.min.css';

import {
  Table,
  Loader,
} from 'semantic-ui-react';

const {Body, Cell, Header, HeaderCell, Row} = Table;

import Page from '../components/headerfooter.js';

function reducer(state, action) {
  console.log(action);
  const {column, tableData, direction} = state
  switch(action.type) {
    case 'CHANGE_SORT':
      var sorted = _.sortBy(tableData, [action.column]);
      if(state.direction === 'ascending')
        sorted = _.reverse(sorted)
      return {
        ...state,
        tableData: sorted,
        direction: direction === 'ascending' ? 'descending' : 'ascending',
        column: action.column,
      };
    default:
      console.error('default action');
      return state;
  }
}

const objToRow = (obj) => {
  return (
    <Row key={obj.mapid}>
      <Cell>{`map${obj.mapid}`}</Cell>
      <Cell>{`${obj.levelname || ''} ${obj.nozone ? '' : (obj.zonetitle || 'zone')} ${obj.act || ''}`}</Cell>
      <Cell>{obj.mappack}</Cell>
      <Cell>{obj.typeoflevel}</Cell>
      <Cell>{obj.numlaps}</Cell>
      <Cell>{obj.hidden ? "yes" : "no"}</Cell>
    </Row>
  );
};

const MapsTable = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    column: null,
    tableData: props.data,
    direction: null 
  });
  const { column, tableData, direction } = state;

  return (
    <Page>
      <Table sortable>
        <Header>
          <HeaderCell
            sorted={column === 'mapid' ? direction : null}
            onClick={() => dispatch({type: 'CHANGE_SORT', column: 'mapid'})}
          >
            map id
          </HeaderCell>
          <HeaderCell
            sorted={column === 'levelname' ? direction : null}
            onClick={() => dispatch({type: 'CHANGE_SORT', column: 'levelname'})}
          >
            name
          </HeaderCell>
          <HeaderCell
            sorted={column === 'mappack' ? direction : null}
            onClick={() => dispatch({type: 'CHANGE_SORT', column: 'mappack'})}
          >
            map pack
          </HeaderCell>
          <HeaderCell
            sorted={column === 'typeoflevel' ? direction : null}
            onClick={() => dispatch({type: 'CHANGE_SORT', column: 'typeoflevel'})}
          >
            game type
          </HeaderCell>
          <HeaderCell
            sorted={column === 'numlaps' ? direction : null}
            onClick={() => dispatch({type: 'CHANGE_SORT', column: 'numlaps'})}
          >
            num laps
          </HeaderCell>
          <HeaderCell
            sorted={column === 'hidden' ? direction : null}
            onClick={() => dispatch({type: 'CHANGE_SORT', column: 'hidden'})}
          >
            in hell
          </HeaderCell>
        </Header>
        <Body>
          {tableData.map(objToRow)}
        </Body>
      </Table>
    </Page>
  )
}

const Maps = () => {
  const {data, isLoading, isError} = maps();
  if(isLoading) return (<Loader/>);
  return (<MapsTable data={data}/>);
}


export default Maps;
