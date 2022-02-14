import { React } from "react";

import { Header, Icon, Container } from "semantic-ui-react";
import Counter from "./counter.js";
import Players from "./playerlist.js";

import { server } from "../data.js";

function _Activity() {
  const { data, isLoading, isError } = server();

  if (isError)
    return (
      <Header size="huge" style={{ color: "red" }}>
        Server seems down.
        <br />
        Please contact{" "}
        <span style={{ color: "blue" }}>
          <Icon name="discord" fitted /> Fl_GUI#5136
        </span>{" "}
        on discord.
      </Header>
    );

  return (
    <>
      <Counter />
      <Container style={{ padding: "0em 4em 1em 4em" }}>
        <Players />
      </Container>
    </>
  );
}

const Activity = () => (
  <Container textAlign="center">
    <_Activity />
  </Container>
);

export default Activity;
