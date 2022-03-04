import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { BodyPrice as s } from './styles';
import { Strings } from 'utils';

export default function BodyActionsPrice({ price, price_sale }) {
  const { t } = useTranslation('common');
  return (
    <div className={s['price']}>
      {price === null ? (
        <div className={s['no-price']}>{t('Менеджер свяжется с вами после уточнения цены')}</div>
      ) : price_sale > 0 ? (
        <>
          <div className={s['prev']}>
            {Strings.formatPrice(price)} грн
          </div>
          <div className={cn(s['actual'], s['actual-red'])}>
            {Strings.formatPrice(price_sale)} грн
          </div>
        </>
      ) : (
        <div className={s['actual']}>
          {Strings.formatPrice(price)} грн
        </div>
      )}
    </div>
  );
}
