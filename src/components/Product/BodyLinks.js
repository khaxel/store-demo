import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { BodyLinks as s } from './styles';

export default function BodyLinks({ product }) {
  const { t } = useTranslation('common');
  return (
    <>
      <div className={s['row']}>
        {t('Категория')}:{' '}
        <Link href={`/cat/${product.path.slug}`}>
          <a className={s['link']}>{product.category_name}</a>
        </Link>
      </div>
      <div className={s['row']}>
        {t('Производитель')}:{' '}
        <Link href={`/cat/${product.path.slug}/f/manufacturers-${product.manufacturer_slug}`}>
          <a className={s['link']}>{product.manufacturer_name}</a>
        </Link>{' '}
      </div>
    </>
  );
}
