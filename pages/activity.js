import { React } from 'react';

import {
  Container
} from 'semantic-ui-react';
import Counter from './counter.js';
import Players from './playerlist.js';

export default function Activity() {
  return (
    <Container textAlign='center'>
      <Counter/>
      <Container style={{padding:'0em 4em 1em 4em'}}>
        <Players/>
      </Container>
    </Container>
  );
}
