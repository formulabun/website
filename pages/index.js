import { React, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';


import {
  Container,
  Header,
  Icon,
  Tab,
  Grid,
} from 'semantic-ui-react';
import Image from 'next/image';
import Counter from "./counter";
import Players from "./playerlist"

import { server } from './data.js';


const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.primary};
`;

const menu = [
  {
    menuItem: 'About',
  },
  {
    menuItem: 'Details',
  },
  {
    menuItem: 'Join Now',
  },

];
const PageHeader = () => {
  return (
    <div style={{backgroundColor: "#ffc6c6ff"}}>
      <Image src="/images/fastbun.png" width={1015} height={293}/>
      <div style={{padding: '1em 0em 0em 1em'}}>
        <Header as="h1" style={{marginBottom: 0}}> Formula Bun </Header>
        <p style={{margin: '0em 0 1em 0'}}> Just a vanilla srb2kart server </p>
        <Tab menu={{text: true}} panes={menu}/>
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

  return (
    <Container style={{margin:"0em 6em 0em 6em", width:1015}} >
      <PageHeader/>
      <div style={{margin:'2em'}}>
        <p>"AAA"</p>
        <p>"BBB"</p>
        <p>"CCC"</p>
      </div>
      <PageFooter/>
    </Container>
  )
}

export default Index;
