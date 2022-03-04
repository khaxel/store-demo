import { useRouter } from 'next/router';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useAxios } from 'context/Axios';

const useController = ({ entityKey, useFetcher }) => {
  const listQueryKey = `${entityKey}_list`;

  const useList = (params = {}, { endpoint = '', initialData = null, queryConfig={} } = {}) => {
    const _endpoint = endpoint ? '_' + endpoint : '';
    const fetcher = useFetcher();
    const router = useRouter();
    const lang = router.locale;
    params['lang'] = lang;
    let queryKey = [`${listQueryKey}${_endpoint}`, { ...params }];
    return useQuery(
      queryKey,
      async () => {
        const dataApi = await fetcher.getList(params, endpoint);
        return dataApi;
      },
      { initialData, ...queryConfig }
    );
  };

  const useOne = ({ id }) => {
    const fetcher = useFetcher();
    const router = useRouter();
    const lang = router.locale;
    const queryKey = [`${entityKey}_one`, id, lang];
    return useQuery(queryKey, () => {
      return id ? fetcher.getOne({ id, lang }) : () => false;
    });
  };

  const useEntityList = (params = {}) => {
    const fetcher = useFetcher();
    const router = useRouter();
    const lang = router.locale;
    params['lang'] = lang;
    return useQuery(`${listQueryKey}_${lang}`, async () => {
      const dataApi = await fetcher.getEntityList(params);
      return dataApi;
    });
  };

  const useInvalidateAll = (invalidateKeys = []) => {
    const queryClient = useQueryClient();

    return () =>
      invalidateKeys.map((key) => {
        console.log('invalidate', key);
        queryClient.invalidateQueries(key);
      });
  };

  const useAdd = (invalidateKeys = []) => {
    const fetcher = useFetcher();
    const { axiosCSRF } = useAxios();
    const onSuccess = useInvalidateAll([...invalidateKeys, listQueryKey]);
    const mutation = useMutation(async ({ data }) => await fetcher.add(data), {
      onSuccess,
    });

    return {
      mutation,
      add: (data) => {
        axiosCSRF(() => {
          mutation.mutate({ data });
        });
      },
    };
  };

  const useRemove = (invalidateKeys = []) => {
    const fetcher = useFetcher();
    const { axiosCSRF } = useAxios();
    const onSuccess = useInvalidateAll([...invalidateKeys, listQueryKey]);
    const mutation = useMutation(
      async ({ data }) => await fetcher.remove(data),
      {
        onSuccess,
      }
    );

    return {
      mutation,
      remove: (data) => {
        axiosCSRF(() => {
          mutation.mutate({ data });
        });
      },
    };
  };

  return {
    useList,
    useOne,
    useAdd,
    useRemove,
    useEntityList,
  };
};

export default useController;
