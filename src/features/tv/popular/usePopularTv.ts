import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { popularApi } from '../../../apis/tvApi';
import { TVDetail, ListResponse } from '../../../types';

const usePopularTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    'popularTv',
    popularApi
  );
};

export default usePopularTv;
