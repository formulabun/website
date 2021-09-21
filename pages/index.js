import { React, useState, useRef} from 'react';
import 'semantic-ui-css/semantic.min.css';

import {
  Container,
  Header,
  Tab,
  Grid,
} from 'semantic-ui-react';
import Image from 'next/image';

import Activity from './activity.js';
import { server } from './data.js';
import { aboutText, detailsText, rulesText } from './content.js';

const PageHeader = (props) => {
  return (
    <div style={{backgroundColor: "#ffc6c6ff"}}>
      <Image src="/images/fastbun.png" width={1015} height={293}/>
      <div style={{padding: '1em 0em 0em 1em'}}>
        <Header as="h1" style={{marginBottom: 0}}> Formula Bun </Header>
        <Header as="h3" style={{margin: '0em 0 1em 0'}}> Just a vanilla srb2kart server </Header>
        <Tab menu={{text: true}} panes={props.menu}/>
      </div>
    </div>
  );
}

const PageFooter = () => {
  return (
    <div style={{backgroundColor: "#ffc6c6ff", padding:"1em"}}>
      <Grid> <Grid.Row> 
        <Grid.Column width={2}> <Image src="/images/bun.png" width={100} height={100}/> </Grid.Column>
        <Grid.Column style={{fontSize:'medium'}}>
          <p>Fl_GUI#5136</p>
          <p><a href="https://www.github.com/formulabun">github.com/formulabun</a></p>
        </Grid.Column>
      </Grid.Row> </Grid>
    </div>
  );
}

const Index = () => {
  const {data, isLoading, isError} = server();

  const about = useRef(null);
  const details = useRef(null);
  const rules = useRef(null);

  return (
    <Container style={{margin:"0em 6em 0em 6em", width:1015}} >
      <PageHeader menu={[]}/>
      <div style={{padding:'1em 8em 1em 8em', fontSize:'large'}}>
        <p ref={about}>{aboutText}</p>
        <hr/>
        <Activity/>
        <hr/>
        <p ref={rules}>{rulesText}</p>
        <hr/>
        <p ref={details}>{detailsText}</p>
      </div>
      <PageFooter/>
    </Container>
  )
}

export default Index;
