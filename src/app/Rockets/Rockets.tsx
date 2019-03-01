import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { GetRockets } from '../../types/types';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

export default function Launches({
  name,
  limit,
  offset,
  match,
  setTotalCount
}: RouteComponentProps & any) {
  const {
    data: {
      rocketsResult: {
        data,
        result: { totalCount }
      }
    },
    error
  } = useQuery<GetRockets.Query, GetRockets.Variables>(query, {
    variables: {
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
          <LinkStyled to={`${match.path}/${id}`}>🚀 {name}</LinkStyled>
        </div>
      ))}
    </Container>
  );
}

const query = gql`
  query getRockets($limit: Int, $offset: Int) {
    rocketsResult(limit: $limit, offset: $offset) {
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
