import { useInfiniteQuery } from 'react-query';

import { Movies } from '~/infrastructure/services';
import { MovieResults } from '~/infrastructure/models';

const movies = new Movies();

const useFetchPopular = () => {
  const getPopular = async page => {
    const result = await movies.popular({ page });
    return result?.data;
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery<MovieResults>(
    'popular',
    getPopular,
    {
      getNextPageParam: lastPage => {
        if (lastPage.page === lastPage.total_pages) {
          return undefined;
        }
        return lastPage.page + 1;
      },
    },
  );

  return { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status };
};

export default useFetchPopular;
