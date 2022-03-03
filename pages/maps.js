import { React, useState, useReducer } from "react";
import _ from "lodash";

import { maps } from "../data.js";
import MapList from "../components/maplist.js";
import MapGrid from "../components/mapgrid.js";

import "semantic-ui-css/semantic.min.css";

import { Input, Checkbox, Button, Icon, Grid } from "semantic-ui-react";

import Page from "../components/headerfooter.js";

function searchMap(map, search) {
  if (map.levelname?.match(search)) return true;
  if (map.mappack?.match(search)) return true;
  if (("map" + map.mapid).match(search)) return true;
  return false;
}

const FilterBar = (props) => {
  return (
    <Grid container>
      {" "}
      <Grid.Row verticalAlign="middle">
        <Grid.Column width={7}>
          {" "}
          <Input
            icon="search"
            fluid
            placeholder="search through maps"
            onChange={_.debounce((e, o) => props.setSearchString(o.value), 300)}
          />{" "}
        </Grid.Column>
        <Grid.Column width={5}>
          <Checkbox
            onClick={() => props.setShowHidden(!props.showHidden)}
            label="Show maps not in rotation."
          />
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          {" "}
          <Button.Group floated="right">
            <Button
              active={props.showGrid}
              onClick={() => {
                props.setShowGrid(true);
              }}
              icon
            >
              <Icon name="grid layout" />
            </Button>
            <Button
              active={!props.showGrid}
              onClick={() => {
                props.setShowGrid(false);
              }}
              icon
            >
              <Icon name="th list" />
            </Button>
          </Button.Group>{" "}
        </Grid.Column>
      </Grid.Row>{" "}
    </Grid>
  );
};

const MapsTable = (props) => {
  const [search, setSearch] = useState("");
  const [searchString, setSearchString] = useState("");
  const [showGrid, setShowGrid] = useState(true);
  const [showHidden, setShowHidden] = useState(false);

  const searchreg = new RegExp(_.escapeRegExp(searchString), "i");
  const displayData = props.data
    .filter((o) => showHidden || o.typeoflevel !== "singleplayer")
    .filter((o) => searchMap(o, searchreg));

  return (
    <Page>
      <FilterBar
        {...{
          searchString,
          setSearchString,
          showGrid,
          setShowGrid,
          showHidden,
          setShowHidden,
        }}
      />
      {showGrid ? (
        <MapGrid maps={displayData} />
      ) : (
        <MapList maps={displayData} />
      )}
    </Page>
  );
};

export default MapsTable;

export async function getStaticProps(context) {
  const data = await maps();
  return {
    props: { data },
    revalidate: 60 * 60, // 1 hour
  };
}
