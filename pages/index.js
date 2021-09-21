import { React, useState, useRef} from 'react';
import 'semantic-ui-css/semantic.min.css';

import {
  Icon,
  Container,
  Header,
  Tab,
  Grid,
} from 'semantic-ui-react';
import Image from 'next/image';

import Activity from './activity.js';
import { server } from './data.js';
import { aboutText, detailsText, rulesText, joinText } from './content.js';

const PageHeader = (props) => {
  return (
    <div style={{backgroundColor: "#ffe9e0"}}>
      <Image src="/images/fastbun.png" width={1015} height={293}/>
      <div style={{padding: '1em 0em 0em 1em'}}>
        <Header as="h1" style={{marginBottom: 0}}> Formula Bun </Header>
        <Header as="h3" style={{margin: '0em 0 1em 0'}}> Just a vanilla srb2kart server </Header>
        <Tab
          menu={{text: true}}
          panes={props.menu}
          onTabChange={(e, data) => {
            console.log(data.activeIndex);
            data.panes[data.activeIndex].ref.current.scrollIntoView({block: 'center', behavior: 'smooth'}); 
          }}/>
      </div>
    </div>
  );
}

const PageFooter = () => {
  return (
    <div style={{backgroundColor: "#ffe9e0", padding:"1em"}}>
      <Grid> <Grid.Row> 
        <Grid.Column width={2}> <Image src="/images/bun.png" width={100} height={100}/> </Grid.Column>
        <Grid.Column width={4}style={{fontSize:'medium'}}>
          <Icon.Group><Icon name="discord"/>Fl_GUI#5136</Icon.Group>
          <Icon.Group><Icon name="github"/><a href="https://www.github.com/formulabun">github.com/formulabun</a></Icon.Group>
        </Grid.Column>
      </Grid.Row> </Grid>
    </div>
  );
}

const Index = () => {
  const about = useRef(null);
  const activity = useRef(null);
  const join = useRef(null);
  const rules = useRef(null);
  const details = useRef(null);

  const menuItems = [
    { menuItem: 'about', ref:about},
    { menuItem: 'activity', ref:activity},
    { menuItem: 'rules', ref:rules},
    { menuItem: 'join now', ref:join},
    { menuItem: 'details', ref:details}];

  return (
    <Container style={{margin:"0em 6em 0em 6em", width:1015}} >
      <PageHeader menu={menuItems}/>
      <div style={{padding:'1em 8em 1em 8em', fontSize:'large'}}>
        <p ref={about}>{aboutText}</p>
        <hr/>
        <div ref={activity}><Activity/></div>
        <hr/>
        <p ref={rules}>{rulesText}</p>
        <hr/>
        <p ref={join}>{joinText}</p>
        <hr/>
        <p ref={details}>{detailsText}</p>
      </div>
      <PageFooter/>
    </Container>
  )
}

export default Index;
