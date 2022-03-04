import { useTranslation } from 'next-i18next';
import { useRecommendationsList } from 'api/product';
import ProductsLine from 'components/ProductCommon/ProductsLine';

export default function Related({ id, list = [] }) {
  const { t } = useTranslation('common');
  const { data = {} } = useRecommendationsList({
    id,
    initialData: list,
  });

  return (
    <ProductsLine
      title={t('Сопутствующие товары')}
      list={data}
      swiperKey="related"
      zIndex="xl:z-20"
    />
  );
}
