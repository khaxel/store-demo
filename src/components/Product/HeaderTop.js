import { useTranslation } from 'next-i18next';
import { useUI } from 'components/UI/context';
import { RatingStars } from 'components/UI';
import { SvgIcon } from 'components/UI/svg';
import { HeaderTop as s } from './styles';

export default function HeaderTop({ product: p, isSticked }) {
  const { isTouchDevice } = useUI();
  const { t } = useTranslation('common');

  return (
    <div className={s.headerTop}>
    <div className={s.headerTop__container}>
        <div className={s.headerTop__title}>
          <h1 className={s.headerTop__h1({ isSticked })}>
            {p.item_name || 'Товар без названия'}
          </h1>
          {!isTouchDevice && !isSticked && (
            <div className={s.headerTop__RatingStars}>
              <RatingStars
                rating={p.average_rating}
                // starsCount={4}
                starsCount={p.rating_count}
              />
            </div>
          )}
          {isTouchDevice && <ProductCode p={p} />}
        </div>
        {!isTouchDevice && !isSticked && <ProductCode p={p} />}
      </div>
    </div>
  );
}

const ProductCode = ({ p }) => {
  const { t } = useTranslation('common');
  return (
    <div className={s.code}>
      <SvgIcon name="Barcode" className={s.code__barcode} />
      <span className={s.code__title}>
        {t('Код товара')}: {p.id}
      </span>
    </div>
  );
};
