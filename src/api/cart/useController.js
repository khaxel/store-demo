import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useFetcher } from './useFetcher';
import useController from 'api/base/useController';

const entityKey = 'cart';

const {
  useAdd: useAddToCart,
  useRemove: useRemoveFromCart,
  useList: useCartList,
} = useController({
  entityKey,
  useFetcher,
});

const useProduct = ({ id, initialData }) => {
  const fetcher = useFetcher();
  const router = useRouter();
  const lang = router.locale;
  const queryKey = [`${entityKey}_product`, id, lang];
  return useQuery(
    queryKey,
    () => {
      return id ? fetcher.getProduct({ id, lang }) : () => false;
    },
    { initialData }
  );
};

export { useAddToCart, useRemoveFromCart, useCartList, useProduct };
