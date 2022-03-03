import {React, useState, useReducer} from "react";
import _ from "lodash";

import {
  Table,
} from "semantic-ui-react";

const { Body, Cell, Header, HeaderCell, Row } = Table;

import {mapToTitle, formatMapPack} from "./maps.js";

function reducer(state, action) {
  const { column, tableData, direction } = state;
  switch (action.type) {
    case "CHANGE_SORT":
      var sorted = _.sortBy(tableData, [action.column]);
      if (state.direction === "ascending") sorted = _.reverse(sorted);
      return {
        ...state,
        tableData: sorted,
        direction: direction === "ascending" ? "descending" : "ascending",
        column: action.column,
      };
    default:
      console.error("default action");
      return state;
  }
}


const objToRow = (obj) => {
  return (
    <Row key={obj.mapid}>
      <Cell>{`map${obj.mapid}`}</Cell>
      <Cell>{mapToTitle(obj)}</Cell>
      <Cell>{formatMapPack(obj.mappack)}</Cell>
      <Cell>{obj.numlaps}</Cell>
    </Row>
  );
};


function MapList(props) {
  const [state, dispatch] = useReducer(reducer, {
    column: null,
    tableData: props.maps,
    direction: null,
  });
  const { column, tableData, direction } = state;

  return (
      <Table sortable>
        <Header>
          <HeaderCell
            sorted={column === "mapid" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "mapid" })}
          >
            map id
          </HeaderCell>
          <HeaderCell
            sorted={column === "levelname" ? direction : null}
            onClick={() =>
              dispatch({ type: "CHANGE_SORT", column: "levelname" })
            }
          >
            name
          </HeaderCell>
          <HeaderCell
            sorted={column === "mappack" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "mappack" })}
          >
            map pack
          </HeaderCell>
          <HeaderCell
            sorted={column === "numlaps" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "numlaps" })}
          >
            num laps
          </HeaderCell>
        </Header>
        <Body>
          {tableData.map(objToRow)}
        </Body>
      </Table>);
}

export default MapList;
