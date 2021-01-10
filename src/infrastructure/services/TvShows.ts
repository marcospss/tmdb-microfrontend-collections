import instance from '~/infrastructure/settings/axiosInstance';
import { paramsDefault } from '~/infrastructure/settings/api';
import { TvResults, TvDetails, ParamsUrl } from '~/infrastructure/models';

export class TvShows {
  discover({ sortBy = 'popularity.desc', page = 1 }: ParamsUrl) {
    return instance.get<TvResults>(`/discover/tv?${paramsDefault}&page=${page}&sort_by=${sortBy}&timezone=America%2FNew_York&include_null_first_air_dates=false`);
  }

  search({ query, page = 1 }: ParamsUrl) {
    return instance.get<TvResults>(`/search/tv?${paramsDefault}&page=${page}&query=${query}&include_adult=false`);
  }

  details({ mediaId }: ParamsUrl) {
    return instance.get<TvDetails>(`/tv/${mediaId}?${paramsDefault}`);
  }

  recommendations({ mediaId, page = 1 }: ParamsUrl) {
    return instance.get<TvResults>(`/tv/${mediaId}/recommendations?${paramsDefault}&page=${page}`);
  }

  similar({ mediaId, page = 1 }: ParamsUrl) {
    return instance.get<TvResults>(`/tv/${mediaId}/similar?${paramsDefault}&page=${page}`);
  }

  airingToday({ page = 1 }: ParamsUrl) {
    return instance.get<TvResults>(`/tv/airing_today?${paramsDefault}&page=${page}`);
  }

  onTheAir({ page = 1 }: ParamsUrl) {
    return instance.get<TvResults>(`/tv/on_the_air?${paramsDefault}&page=${page}`);
  }

  popular({ page = 1 }: ParamsUrl) {
    return instance.get<TvResults>(`/tv/popular?${paramsDefault}&page=${page}`);
  }

  topRated({ page = 1 }: ParamsUrl) {
    return instance.get<TvResults>(`/tv/top_rated?${paramsDefault}&page=${page}`);
  }
}
