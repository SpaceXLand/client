import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { GetLaunches, GetLaunch, GetShips } from '../../types/types';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

export default function Launches({
  name,
  limit,
  offset,
  match,
  setTotalCount,
}: RouteComponentProps & any) {
  const { data, error, loading } = useQuery<GetShips.Query>(query, {
    variables: {
      name,
      limit,
      offset,
    },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;

  const { shipsResult } = data || {};

  const {
    data: ships,
    result: { totalCount },
  } = shipsResult || {};

  setTotalCount(totalCount);

  return (
    <Container>
      {ships.map(({ id, name }) => (
        <div key={id}>
          <LinkStyled to={`${match.path}/${id}`}>⛴ {name}</LinkStyled>
        </div>
      ))}
    </Container>
  );
}

const query = gql`
  query getShips($name: String, $limit: Int, $offset: Int) {
    shipsResult(find: { name: $name }, limit: $limit, offset: $offset) {
      result {
        totalCount
      }
      data {
        id
        name
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
