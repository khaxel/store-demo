import { useTranslation } from 'next-i18next';
import { useRecentlyList } from 'api/recentlyViewed';
import ProductsLine from 'components/ProductCommon/ProductsLine';

export default function RecentlyViewed({ id }) {
  const { t } = useTranslation('common');
  const { data = {} } = useRecentlyList({ id });

  return (
    <>
      {Object.keys(data).length > 0 && (
        <ProductsLine
          title={t('Недавно просмотренные товары')}
          list={data}
          swiperKey="recentlyViewed"
        />
      )}
    </>
  );
}
