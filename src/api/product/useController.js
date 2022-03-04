import { useRouter } from 'next/router';
import { useQuery, useInfiniteQuery } from 'react-query';
import { useFetcher } from './useFetcher';

const entityKey = 'item';

const useInfiniteProducts = ({ filter, initFilter, initPage }) => {
  const fetcher = useFetcher();
  const router = useRouter();
  const lang = router.locale;
  const { page, ...filterForAPI } = filter || initFilter;
  const queryKey = ['products', lang, initPage, { ...filterForAPI }];

  return useInfiniteQuery(
    queryKey,
    async ({ pageParam }) => {
      if (pageParam === false) return false;
      return fetcher.postSearch({
        lang,
        filter: {
          ...filterForAPI,
          page: pageParam ? pageParam : initPage ? initPage : null,
        },
      });
    },
    {
      getPreviousPageParam: (pageData) => {
        // console.log("pageData", pageData)
        return pageData.meta.current_page - 1 > 0
          ? pageData.meta.current_page - 1
          : false;
      },
      getNextPageParam: (pageData) =>
        pageData.meta.current_page + 1 <= pageData.meta.last_page
          ? pageData.meta.current_page + 1
          : false,
    }
  );
};

const useOne = ({ slug, initialData }) => {
  const fetcher = useFetcher();
  const router = useRouter();
  const lang = router.locale;
  const queryKey = [`${entityKey}_one`, lang, slug];
  return useQuery(
    queryKey,
    () => {
      return slug ? fetcher.getOneBySlug({ slug, lang }) : () => false;
    },
    { initialData }
  );
};

const useRecommendationsList = ({ id, initialData }) => {
  const fetcher = useFetcher();
  const router = useRouter();
  const lang = router.locale;
  return useQuery(
    [`${entityKey}_recommendations`, id, lang],
    async () => {
      const dataApi = await fetcher.getList(
        { item_id: id, lang },
        'recommendations'
      );
      return dataApi;
    },
    { initialData }
  );
};

export { useOne, useInfiniteProducts, useRecommendationsList };
