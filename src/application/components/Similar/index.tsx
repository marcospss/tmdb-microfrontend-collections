import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import { Movies } from '~/infrastructure/services';
import { MovieResults, MovieItem } from '~/infrastructure/models';
import image from '~/infrastructure/settings/imageApi';

import LoaderAnimation from '~/application/components/LoaderAnimation';

// import {  } from './styles';

type SimilarProps = {
  mediaId: string;
  mediaType: string;
};

const Similar = ({ mediaId, mediaType }: SimilarProps) => {
  const movies = new Movies();
  const history = useHistory();

  const loadPopularMovies = async () => {
    const result = await movies.similar({ mediaId, page: 1 });
    return result?.data;
  };

  const { isLoading, isError, error, data, isFetching } = useQuery<MovieResults>(['similar', mediaId], loadPopularMovies, {
    keepPreviousData: true,
  });

  const handleGoPageDetails = (id: number) => history.push(`/details/${id}`);

  return (
    <>
      {isLoading && <LoaderAnimation />}
      <h1>Similar</h1>
    </>
  );
};

export default Similar;
