import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { GetLaunches, GetLaunch } from '../../types/types';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

export default function Launches({
  name,
  limit,
  offset,
  match
}: RouteComponentProps & any) {
  const {
    data: {
      launchesPastResult: {
        data,
        result: { totalCount }
      }
    },
    error
  } = useQuery<GetLaunches.Query, GetLaunches.Variables>(query, {
    variables: {
      name,
      limit,
      offset
    }
  });

  return error ? (
    <span>{error.message}</span>
  ) : (
    <Container>
      {data.map(({ id, mission_name }) => (
        <div key={id}>
          <LinkStyled to={`${match.path}/${id}`}>🛰 {mission_name}</LinkStyled>
        </div>
      ))}
    </Container>
  );
}

const query = gql`
  query getLaunches($name: String, $limit: Int, $offset: Int) {
    launchesPastResult(
      find: { mission_name: $name }
      limit: $limit
      offset: $offset
    ) {
      result {
        totalCount
      }
      data {
        id
        mission_name
      }
    }
  }
`;

const Container = styled.div`
  text-align: center;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  :hover {
    text-decoration: underline;
  }
`;
