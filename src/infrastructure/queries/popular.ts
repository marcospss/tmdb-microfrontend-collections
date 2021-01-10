import { useQuery } from 'react-query';

import { Movies } from '~/infrastructure/services';
import { MovieResults } from '~/infrastructure/models';

const movies = new Movies();

const useFetchPopular = (page: number) => {
  const getPopular = async () => {
    const result = await movies.popular({ page });
    return result?.data;
  };

  const { isLoading, isError, error, data, isFetching } = useQuery<MovieResults>(['popular', page], getPopular, {
    keepPreviousData: true,
  });

  return { isLoading, isError, error, data, isFetching };
};

export default useFetchPopular;
