import React, { lazy, Suspense } from 'react';
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
} from './styles';

const ButtonFavorite = lazy(() => import('favorites/ButtonFavorite'));

const Popular = () => {
  const history = useHistory();

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useFetchPopular();

  const handleGoPageDetails = (mediaId: number) => history.push(`/details/${mediaId}`);
  return (
    <BackdropList>
      <GridList>
        <Suspense fallback={<LoaderAnimation />}>
          {status === 'error' && (<div> Error: {error.message}</div>)}
          {status === 'loading' && <LoaderAnimation />}
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group?.results.map((item: MoviePreview) => (
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
            </React.Fragment>
          ))}

          {/* {data?.results?.map((item: MoviePreview) => (

          ))} */}
        </Suspense>
      </GridList>
      <>
        <ContainerPagination>
          <Button type='button' onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
          </Button>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </ContainerPagination>
      </>
    </BackdropList>
  );
};

export default Popular;
