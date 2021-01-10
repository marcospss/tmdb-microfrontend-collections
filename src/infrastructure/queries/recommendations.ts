import { useQuery } from 'react-query';

import { Movies } from '~/infrastructure/services';
import { MovieResults } from '~/infrastructure/models';

const movies = new Movies();

const useFetchRecommendations = (mediaId: string) => {
  const getRecommendations = async () => {
    const result = await movies.recommendations({ mediaId, page: 1 });
    return result?.data;
  };

  const { isLoading, isError, error, data, isFetching } = useQuery<MovieResults>(['recommendations', mediaId], getRecommendations, {
    keepPreviousData: true,
  });

  return { isLoading, isError, error, data, isFetching };
};

export default useFetchRecommendations;
