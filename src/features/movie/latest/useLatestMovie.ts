import { useQuery } from 'react-query';
import { latestApi } from './../../../apis/movieApi';
import { AxiosError, AxiosResponse } from 'axios';
import { MovieDetail } from './../../../types/index';

const useLatestMovie = () => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    'latestMovie',
    latestApi
  );
};

export default useLatestMovie;
