import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="" />
        <Title>Welcome to SpaceX Land 🚀</Title>
        <Subtitle>A non official platform for SpaceX's data!</Subtitle>
        <LaunchesLink to="/launches">🛰 Discover the Launches 🛰</LaunchesLink>
        <APILink
          href="https://api.spacex.land"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔥 Explore the API 🔥
        </APILink>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 40vh;
  top: 50px;
`;
const Title = styled.h3`
  margin-top: 40px;
  margin-bottom: 10px;
`;
const Subtitle = styled.p`
  margin: 0;
`;
const LaunchesLink = styled(Link)`
  color: #d5dd61;
  margin-top: 40px;
`;
const APILink = styled.a`
  color: #fd7c50;
  margin-top: 40px;
`;
