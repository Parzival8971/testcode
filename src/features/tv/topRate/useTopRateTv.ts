import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { topRatedApi } from '../../../apis/tvApi';
import { TVDetail, ListResponse } from '../../../types';

const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    'topRatedTv',
    topRatedApi
  );
};

export default useTopRateTv;
