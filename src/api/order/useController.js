import { useAxios } from 'context/Axios';
import { useMutation } from 'react-query';
import { useFetcher } from './useFetcher';
// import useController from 'api/base/useController';

const entityKey = 'order';

// const {
//   useAdd: useAddToComparison,
// } = useController({
//   entityKey,
//   useFetcher,
// });

function useOrder() {
  const fetcher = useFetcher();
  const { axiosCSRF } = useAxios();
  const onSuccess = () => {};
  //useInvalidateAll([...invalidateKeys, listQueryKey]);
  const mutation = useMutation(async ({ data }) => await fetcher.add(data), {
    onSuccess,
  });

  return {
    mutation,
    order: (data) => {
      axiosCSRF(() => {
        mutation.mutate({ data });
      });
    },
  };
}

export { useOrder };
