import { useState } from "react";
import {
  Container,
  Grid,
  Image,
  Header,
  Reveal,
  Transition,
  Segment,
} from "semantic-ui-react";

const { Row, Column } = Grid;
const { Content } = Reveal;

import { mapToTitle, formatMapPack } from "./maps.js";

function MapItem(props) {
  const [open, doOpen] = useState(false);
  const { thumbnail, mappack, numlaps, mapid } = props.map;

  return (
    <Container
      onMouseEnter={() => doOpen(true)}
      onMouseLeave={() => doOpen(false)}
      onClick={
        () => {
          doOpen(true);
          setTimeout(() => doOpen(false), 500);
        } /* Screw mobile */
      }
    >
      <div
        style={{
          position: "absolute",
          bottom: 20,
          maxWidth: "100%",
        }}
      >
        <Header as="h3">
          {mapToTitle(props.map)}
          <Header.Subheader> MAP{mapid.toUpperCase()} </Header.Subheader>
          <Header.Subheader> {numlaps} laps </Header.Subheader>
        </Header>
        <Header as="h3"> {formatMapPack(mappack)} </Header>
      </div>
      <Transition.Group animation="slide down">
        {!open && <Image fluid style={{ zindex: 10 }} src={thumbnail} />}
      </Transition.Group>
    </Container>
  );
}

function MapGrid(props) {
  return (
    <Container>
      <Grid>
        {" "}
        {props.maps.map((map) => {
          return (
            <Column key={map.mapid} computer={4} mobile={8}>
              <MapItem {...{ map }} />
            </Column>
          );
        })}{" "}
      </Grid>{" "}
    </Container>
  );
}

export default MapGrid;
