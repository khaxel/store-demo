import { useAxios } from 'context/Axios';
import { useBaseApiFetcher } from 'api/base/useFetcher';

const entityPrefix = '/cart';

function useFetcher() {
  const { axios } = useAxios();
  const apiBase = useBaseApiFetcher({ entityPrefix });

  const api = {
    getProduct: function ({ id, lang }) {
      return axios
        .get(`${entityPrefix}/product`, { params: { items_id: id, lang } })
        .then(function (response) {
          return response.data;
        });
    },
  };

  return { ...apiBase, ...api };
}

export { useFetcher };
