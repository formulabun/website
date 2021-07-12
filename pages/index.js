import React from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css'


import { Container, Header } from 'semantic-ui-react';
import Image from 'next/image';


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
        <a href={`srb2kart://ip/${process.env.REACT_APP_SERVER}`}> join formula bun </a>
      </p>
    </Container>
);

export default Index;
