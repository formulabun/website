import React from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css'

import { Container, Header } from 'semantic-ui-react';
import Image from 'next/image';
import Counter from "./counter";
import Players from "./playerlist"


const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.primary};
`;

const Index = () => (
    <Container>
    <Header as="h1"> Formula bun </Header>
      <Header> gaming </Header>
      <Image src="/images/fastbun.png" width={1015} height={293}/>
      <p>
        <a href={`srb2kart://ip/${process.env.NEXT_PUBLIC_KARTSERVER_IP}`}> join formula bun </a>
      </p>
      <Counter/>
      <Players/>
    </Container>
);

export default Index;
