import React from 'react';

import { MovieItem } from '~/infrastructure/models';
import LoaderAnimation from '~/application/components/LoaderAnimation';
import CardPosterDescription from '~/application/components/CardPosterDescription';

import { useFetchRecommendations } from '~/infrastructure/queries';

import { Container, GridList, Title } from './styles';

type RecommendationsProps = {
  mediaId: string;
  mediaType: string;
};

const Recommendations = ({ mediaId, mediaType }: RecommendationsProps) => {
  const { isLoading, isError, error, data, isFetching } = useFetchRecommendations(mediaId);

  return (
    <Container>
      {isError && <h2>Error: {error}</h2>}
      {isLoading || isFetching ? <LoaderAnimation /> : null}
      {!!data?.results?.length && (
        <>
          <Title>Recommendations</Title>
          <GridList>
            {data?.results?.map((item: MovieItem) => (
              <CardPosterDescription
                key={item.id}
                mediaId={item.id}
                posterPath={item.poster_path}
                title={item.title}
                overview={item.overview}
                mediaType={mediaType}
                hideOverflowTitle={false}
              />
            ))}
          </GridList>
        </>
      )}
    </Container>
  );
};

export default Recommendations;
