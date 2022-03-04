import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import Status from './Status';
import { BodyActions as s } from './styles';
import ps from './product.module.css';
import BodyActionsPrice from './BodyActionsPrice';
import BodyActionsBuy from './BodyActionsBuy';
import Stars from 'components/UI/Stars';
import BodyActionsBuy1Click from './BodyActionsBuy1Click';
import { Comparison, Wish } from 'components/ProductCommon';

export default function BodyActions({ product: p }) {
  const { t } = useTranslation('common');

  return (
    <>
      <div className={cn(ps['ag-prc'], s['price'])}>
        <BodyActionsPrice price={p.price} price_sale={p.price_sale} />
      </div>

      <div className={cn(ps['ag-sts'], s['status'])}>
        <Status stock_status={p.stock_status} />
      </div>
      <div className={cn(ps['ag-buy'], s['buy'])}>
        <BodyActionsBuy
          id={p.id}
          in_cart={p.in_cart}
          price={p.price}
          stock_status={p.stock_status}
        />
      </div>

      <div className={cn(ps['ag-str'], s['stars'])}>
        <Stars
          rating={p.average_rating}
          starsCount={p.rating_count}
          size="lg"
        />
        <span className={s['stars__reviews']}>
          {p.review_count.count} {p.review_count.word}
        </span>
      </div>

      <div className={cn(ps['ag-act'], s['actions'])}>
        <Wish
          id={p.id}
          className={s['actions__wish']}
          isSelected={!!p.in_wishlist}
        />
        {t('В избранное')}
        <div className={s['actions__divider']}></div>
        <Comparison
          id={p.id}
          className={s['actions__comparison']}
          isSelected={!!p.in_comparison}
        />
        {t('В сравнение')}
      </div>
      <div className={cn(ps['ag-b1c'], s['buy1click'])}>
        <BodyActionsBuy1Click />
      </div>
    </>
  );
}
