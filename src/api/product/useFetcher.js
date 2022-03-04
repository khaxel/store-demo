import { useAxios } from 'context/Axios';
import { useBaseApiFetcher } from 'api/base/useFetcher';

const entityPrefix = '/item';

function useFetcher() {
  const { axios } = useAxios();
  const apiBase = useBaseApiFetcher({ entityPrefix });

  const api = {
    getOneBySlug: ({ slug, lang }) => {
      const params = {
        slug,
        lang,
      };

      return axios.get(`${entityPrefix}`, { params }).then((response) => {
        return response.data;
      });
    },

    postSearch: ({ lang, filter }) => {
      filter['lang'] = lang;
      return axios
        .post(`${entityPrefix}/search`, { ...filter })
        .then((response) => {
          return response.data;
        });
    },
  };

  return { ...apiBase, ...api };
}

export { useFetcher };
