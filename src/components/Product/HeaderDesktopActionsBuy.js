import { useProduct } from 'api/cart';
import { PRODUCT_STATUS_OUTOFSTOCK } from 'const';
import { Buy } from 'components/ProductCommon/Buy';

export default function HeaderDesktopActionsBuy({ id, price, stock_status }) {
  const { data: productInCart } = useProduct({
    id,
    initialData: { quantity: 0 },
  });

  return (
    <Buy id={id} inCart={productInCart.quantity || 0}>
      {stock_status === PRODUCT_STATUS_OUTOFSTOCK ? (
        <Buy.ButtonOutOfStock variant="blueS2Str" />
      ) : !price ? (
        <Buy.ButtonOnBackorder />
      ) : !!productInCart.quantity ? (
        <Buy.ButtonInCart />
      ) : (
        <Buy.ButtonBuy />
      )}
    </Buy>
  );
}
