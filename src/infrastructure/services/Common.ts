import instance from '~/infrastructure/settings/axiosInstance';
import { paramsDefault } from '~/infrastructure/settings/api';
import { Genres, Credits, ParamsUrl } from '~/infrastructure/models';

export class Common {
  genre({ mediaType }: ParamsUrl) {
    return instance.get<Genres>(`/genre/${mediaType}/list?${paramsDefault}`);
  }

  credits({ mediaType, mediaId }: ParamsUrl) {
    return instance.get<Credits>(`/${mediaType}/${mediaId}/credits?${paramsDefault}`);
  }
}
