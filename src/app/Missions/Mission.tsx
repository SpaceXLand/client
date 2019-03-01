import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { GetMission } from '../../types/types';
import { RouteComponentProps } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function Mission({
  match: {
    params: { id }
  }
}: RouteComponentProps<{ id: string }>) {
  const {
    data: {
      mission: { name, description, manufacturers, twitter, website, wikipedia }
    },
    error,
    loading
  } = useQuery<GetMission.Query, GetMission.Variables>(query, {
    variables: {
      id
    }
  });

  return error ? (
    <span>{error.message}</span>
  ) : loading ? (
    <span>Loading...</span>
  ) : (
    <Container>
      <h2>🎯 {name}</h2>
      <Details>{description}</Details>
    </Container>
  );
}

const query = gql`
  query getMission($id: ID!) {
    mission(id: $id) {
      name
      description
      manufacturers
      twitter
      website
      wikipedia
    }
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Container = styled.div`
  text-align: center;
`;

const Details = styled.p`
  font-size: ${({ theme }) => theme.font.size.normal};
`;

const SliderStyled = styled(Slider)`
  .slick-list {
    height: 300px;
  }
`;
