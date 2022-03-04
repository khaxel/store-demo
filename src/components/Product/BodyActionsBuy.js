import { useProduct } from 'api/cart';
import { PRODUCT_STATUS_OUTOFSTOCK } from 'const';
import { Buy } from 'components/ProductCommon/Buy';
import { BodyActions as s } from './styles';

export default function BodyActionsBuy({ id, price, stock_status }) {
  const { data: productInCart } = useProduct({
    id,
    initialData: { quantity: 0 },
  });

  return (
    <Buy id={id} inCart={productInCart.quantity || 0}>
      {stock_status === PRODUCT_STATUS_OUTOFSTOCK ? (
        <div className={s['buy__btn-center']}>
          <Buy.ButtonOutOfStock />
        </div>
      ) : !price ? (
        <div className={s['buy__btn-center']}>
          <Buy.ButtonOnBackorder />
        </div>
      ) : !!productInCart.quantity ? (
        <>
          <Buy.Counter />
          <Buy.ButtonInCart />
        </>
      ) : (
        <>
          <Buy.Counter />
          <Buy.ButtonBuy />
        </>
      )}
    </Buy>
  );
}
