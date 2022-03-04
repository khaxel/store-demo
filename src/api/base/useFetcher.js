import { useAxios } from 'context/Axios';

function useBaseApiFetcher({ entityPrefix }) {
  const { axios } = useAxios();

  const api = {
    getList: function (filter = {}, endpoint = '') {
      const params = new URLSearchParams();

      for (let key of Object.keys(filter)) {
        if (filter[key] !== null) {
          params.append(key, filter[key]);
        }
      }

      return axios
        .get(`${entityPrefix}${endpoint ? '/' + endpoint : ''}`, { params })
        .then(function (response) {
          return response.data;
        });
    },

    getSearch: function (searchFilter = {}) {
      const params = new URLSearchParams();

      for (let key of Object.keys(searchFilter)) {
        if (searchFilter[key] !== null) {
          params.append(key, searchFilter[key]);
        }
      }

      return axios.get(entityPrefix, { params }).then(function (response) {
        return response.data?.data;
      });
    },

    getOne: function ({ id, lang }) {
      return axios
        .get(`${entityPrefix}/${id}`, { lang })
        .then(function (response) {
          return response.data;
        });
    },

    add: function (data) {
      return axios.post(`${entityPrefix}/add`, data);
    },
    remove: function (data) {
      return axios.post(`${entityPrefix}/remove`, data);
    },
    getEntityList: function (params = {}) {
      return axios
        .get(`${entityPrefix}/get`, { params })
        .then(function (response) {
          return response.data;
        });
    },
  };
  return api;
}

export { useBaseApiFetcher };
