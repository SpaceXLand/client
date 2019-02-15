import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { GetLaunch, GetLaunches } from '../../types/types';
import { RouteComponentProps } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function Launch({
  match: {
    params: { id }
  }
}: RouteComponentProps<{ id: string }>) {
  const {
    data: {
      launch: { name, date, details, success, rocket, links }
    },
    error,
    loading
  } = useQuery<GetLaunch.Query, GetLaunch.Variables>(query, {
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
      <h2>🛰 {name}</h2>
      <h4>
        {new Date(date).toLocaleDateString()} 🚀 {rocket.name}
      </h4>
      <Details>{details}</Details>
      <h5>Success {success ? '✅' : '❌'}</h5>
      <SliderStyled {...settings}>
        {links.images.map((src, index) => (
          <img key={index} src={src} />
        ))}
      </SliderStyled>
    </Container>
  );
}

const query = gql`
  query getLaunch($id: ID!) {
    launch(id: $id) {
      name: mission_name
      details
      date: launch_date_local
      success: launch_success
      links {
        video: video_link
        images: flickr_images
      }
      rocket {
        name: rocket_name
      }
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
