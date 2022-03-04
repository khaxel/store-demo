import { $axios } from 'api/axiosSSG';

const entityPrefix = '/item';

const api = {
  getOne: async ({ slug, locale }) => {
    const response = await $axios
      .setLocale(locale)
      .get(`${entityPrefix}`, { slug });
    return response.data;
  },

  getSearch: async ({ locale, filter = {} }) => {
    const response = await $axios
      .setLocale(locale)
      .post(`${entityPrefix}/search`, { ...filter });
    return response.data;
  },

  getBuildOldSlugsList: async ({ locale }) => {
    const response = await $axios
      .setLocale(locale)
      .get(`/build/items`, { old_item: true });
    return response.data;
  },
};

export { api };
