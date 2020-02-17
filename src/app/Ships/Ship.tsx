import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { GetLaunch, GetLaunches, GetShips, GetShip } from '../../types/types';
import { RouteComponentProps } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function Ship({
  match: {
    params: { id },
  },
}: RouteComponentProps<{ id: string }>) {
  const { data, error, loading } = useQuery<GetShip.Query, GetShip.Variables>(
    query,
    {
      variables: {
        id,
      },
    },
  );

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;

  const {
    ship: { name, port, image },
  } = data;

  return (
    <Container>
      <h2>🛰 {name}</h2>
      <Details>{port}</Details>
      <img src={image} alt="" width={200} />
    </Container>
  );
}

const query = gql`
  query getShip($id: ID!) {
    ship(id: $id) {
      name
      port: home_port
      image
    }
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Details = styled.p`
  font-size: ${({ theme }) => theme.font.size.normal};
`;
