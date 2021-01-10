/* eslint-disable camelcase */
import { Genres, CreatedBy, ProductionCompanies } from './common';

type TvItem = {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: Genres[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
};

type Networks = {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
};

type Seasons = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};

export type TvDetails = {
  backdrop_path: string | null;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: null;
  networks: Networks[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  seasons: Seasons[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type TvResults = {
  page: number;
  results: TvItem[];
  total_pages: number;
  total_results: number;
};
