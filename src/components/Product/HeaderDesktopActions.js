import { Strings } from 'utils';
import { HeaderDesktopActions as s } from './styles';
import HeaderDesktopActionsBuy from './HeaderDesktopActionsBuy';

export default function HeaderDesktopActions({ product: p }) {
  return (
    <div className={s.actions}>
      <div className={s.actions__price}>
        {p.price_sale > 0 ? (
          <>
            <div className={s['actions__price-prev']}>
              {Strings.formatPrice(p.price)} грн
            </div>
            <div className={s['actions__price-actual']}>
              {Strings.formatPrice(p.price_sale)} грн
            </div>
          </>
        ) : (
          <div className={s['actions__price-actual']}>
            {Strings.formatPrice(p.price)} грн
          </div>
        )}
      </div>
      <HeaderDesktopActionsBuy
        id={p.id}
        in_cart={p.in_cart}
        price={p.price}
        stock_status={p.stock_status}
      />
    </div>
  );
}
