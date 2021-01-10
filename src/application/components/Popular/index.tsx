import React, { useState, lazy, Suspense } from 'react';
import { useHistory } from 'react-router-dom';

import { MoviePreview } from '~/infrastructure/models';
import image from '~/infrastructure/settings/imageApi';
import LoaderAnimation from '~/application/components/LoaderAnimation';
import ImagePlaceholder from '~/application/components/ImagePlaceholder';

import { useFetchPopular } from '~/infrastructure/queries';

import {
  BackdropList,
  GridList,
  Card,
  WrapperButtonFavorite,
  Header,
  Image,
  Title,
  Overview,
  ButtonsActions,
  ContainerPagination,
  Button,
  TotalPages,
} from './styles';

const ButtonFavorite = lazy(() => import('favorites/ButtonFavorite'));

const Popular = () => {
  const history = useHistory();
  const [page, setPage] = useState<number>(1);

  const { isLoading, isError, error, data, isFetching } = useFetchPopular(page);

  const totalPages = data?.total_pages || 0;

  const handleGoPageDetails = (mediaId: number) => history.push(`/details/${mediaId}`);

  return (
    <BackdropList>
      {isError && <div>Error:{error.message}</div>}
      {isLoading && <LoaderAnimation />}
      <GridList>
        <Suspense fallback={<LoaderAnimation />}>
          {data?.results?.map((item: MoviePreview) => (
            <Card key={item.id}>
              <WrapperButtonFavorite>
                <ButtonFavorite media={item} />
              </WrapperButtonFavorite>
              <Header onClick={() => handleGoPageDetails(item.id)}>
                {item.backdrop_path ? (
                  <Image src={`${image.secure_base_url}${image.backdrop_sizes.w300}${item.backdrop_path}`} alt={item.title} />
                ) : (
                  <ImagePlaceholder />
                )}
                <Title>{item.title}</Title>
              </Header>
              <Overview onClick={() => handleGoPageDetails(item.id)}>{item.overview.substring(0, 150)}</Overview>
              <ButtonsActions>
                <button className='learn-more' type='button' onClick={() => handleGoPageDetails(item.id)}>
                  Learn More
                </button>
              </ButtonsActions>
            </Card>
          ))}
        </Suspense>
      </GridList>
      <>
        {isFetching ? (
          <LoaderAnimation />
        ) : (
          <ContainerPagination>
            <Button onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={page === 1}>
              Previous Page
            </Button>
            <TotalPages>
              {page} of {totalPages}
            </TotalPages>
            <Button onClick={() => setPage(old => (page > totalPages ? old : old + 1))} disabled={totalPages === page}>
              Next page
            </Button>
          </ContainerPagination>
        )}
      </>
    </BackdropList>
  );
};

export default Popular;
