import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { similarApi } from '../../apis/movieApi';
import { MovieDetail, ListResponse } from '../../types';

const useMovieSimilar = (id: string) => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    ['movieSimilar', id],
    () => similarApi(id)
  );
};

export default useMovieSimilar;
