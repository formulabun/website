import {React, useState, useReducer} from 'react';
import _ from 'lodash';

import { maps } from '../data.js';
import 'semantic-ui-css/semantic.min.css';

import {
  Table,
  Loader,
  Input,
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

function searchMap(map, search) {

  if(map.levelname?.match(search)) return true;
  if(map.mappack?.match(search)) return true;
  if(('map'+map.mapid).match(search)) return true;
  return false;
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
  const [search, setSearch] = useState('');
  const [state, dispatch] = useReducer(reducer, {
    column: null,
    tableData: props.data,
    direction: null,
  });
  const { column, tableData, direction } = state;

  const searchreg = new RegExp(_.escapeRegExp(search), 'i');

  return (
    <Page>
      <Input icon='search' placeholder='search through maps' fluid
        onChange={_.debounce((e, o) => {setSearch(o.value)}, 300)}
      />
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
          {tableData.filter(
            o => searchMap(o, searchreg)
          ).map(objToRow)}
        </Body>
      </Table>
    </Page>
  )
}

const Maps = ({data}) => {
  /*const {data, isLoading, isError} = maps();
  if(isLoading) return (<Loader/>);*/
  return (<MapsTable data={data}/>);
}

export async function getStaticProps() {
  const data = await maps();
  return {
    props: {
      data
    },
    revalidate: 60*60, // one hour seems good

  }
}

export default Maps;
