/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Poster, Content, Title, Overview, LearnMore } from './styles';
import ImagePlaceholder from '~/application/components/ImagePlaceholder';
import imageApi from '~/infrastructure/settings/imageApi';

type CardProps = {
  mediaId: number;
  posterPath: string;
  title: string;
  overview: string;
  mediaType: string;
  hideOverflowTitle: boolean;
};

const CardPosterDescription = ({ mediaId, posterPath, title, overview, mediaType, hideOverflowTitle }: CardProps): JSX.Element => {
  const { secure_base_url, poster_sizes } = imageApi;
  const Processedtitle = title.length > 28 && hideOverflowTitle ? `${title.substring(0, 28)}...` : title;
  return (
    <Card>
      <Poster>
        {posterPath ? (
          <Link to={`/${mediaType}/${mediaId}`}>
            <img src={`${secure_base_url}${poster_sizes.w92}${posterPath}`} alt={title} />
          </Link>
        ) : (
          <ImagePlaceholder />
        )}
      </Poster>
      <Content>
        <Title>{Processedtitle}</Title>
        <Overview>{overview}</Overview>
        <LearnMore>
          <Link to={`/${mediaType}/${mediaId}`}>Learn More</Link>
        </LearnMore>
      </Content>
    </Card>
  );
};
export default CardPosterDescription;
