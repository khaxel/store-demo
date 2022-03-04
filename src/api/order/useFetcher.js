import { useBaseApiFetcher } from 'api/base/useFetcher';
import { useAxios } from 'context/Axios';

const entityPrefix = '/order';

function useFetcher() {
  const apiBase = useBaseApiFetcher({ entityPrefix });
  const { axios } = useAxios();

  const api = {
    add: function (data) {
      return axios.post(`${entityPrefix}/add`, data);
    },
  };

  return { ...apiBase, ...api };
}

export { useFetcher };
