import Axios from 'axios';
import { DEFAULT_LANG_NAME } from 'const';
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const axiosObj = Axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO Remove headers.uuid for build
axiosObj.interceptors.request.use((config) => {
  config.headers.uuid = 'uuid_temp';
  return config;
});

// axiosObj.interceptors.request.use((request) => {
//   console.log('Starting Request', JSON.stringify(request, null, 2));
//   return request;
// });

class AxiosAPI {
  constructor() {
    this.axios = axiosObj;
    this.locale = DEFAULT_LANG_NAME;
  }

  setLocale(locale) {
    this.locale = locale;
    return this;
  }

  get(url, params = {}) {
    // console.log('\n url', url);
    // console.log('\n', { params: { ...params, lang: this.locale } });
    return this.axios.get(url, { params: { ...params, lang: this.locale } });
  }

  post(url, params = {}) {
    return this.axios.post(url, { ...params, lang: this.locale });
  }
}

const $axios = new AxiosAPI();

export { $axios };
