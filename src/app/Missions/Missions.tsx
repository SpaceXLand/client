import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { GetMissions } from '../../types/types';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { mock } from './mocks';

export default function Missions({
  name,
  limit,
  offset,
  match,
  setTotalCount
}: RouteComponentProps & any) {
  const {
    data: {
      missionsResult: {
        data,
        result: { totalCount }
      }
    },
    error
  } = useQuery<GetMissions.Query, GetMissions.Variables>(query, {
    variables: {
      name,
      limit,
      offset
    }
  });

  setTotalCount(totalCount);

  return error ? (
    <span>{error}</span>
  ) : (
    <Container>
      {data.map(({ id, name }) => (
        <div key={id}>
          <LinkStyled to={`${match.path}/${id}`}>🎯 {name}</LinkStyled>
        </div>
      ))}
    </Container>
  );
}

const query = gql`
  query getMissions($name: String, $limit: Int, $offset: Int) {
    missionsResult(find: { name: $name }, limit: $limit, offset: $offset) {
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
