/* eslint-disable camelcase */
export type ParamsUrl = {
  mediaId?: string | string[] | undefined;
  mediaType?: string | string[] | undefined;
  page?: number;
  query?: string;
  sortBy?: string;
};

export type StatusErrors = {
  status_code: number;
  status_message: string;
  success: boolean;
};
