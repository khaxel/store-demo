import { SvgIcon } from 'components/UI/svg';
import { Buy } from 'components/ProductCommon/Buy';
import { useUI } from 'components/UI/context';
import { CartShortItem as s1, CartShortItemCheckout as sCh } from './styles';
import ResponsiveImage from 'components/common/ResponsiveImage';
import { IMAGE_WIDTH_FOR_BP_PRODUCT_THUMB } from 'const';
import { VARIANT_CHECKOUT, VARIANT_CHECKOUT_OK } from './CartShort';

const CartShortItem = ({
  id,
  variant,
  name,
  price,
  cost,
  image,
  quantity,
  removeFromCart,
}) => {
  const { isTouchDevice } = useUI();
  const isCustomStyles =
    variant === VARIANT_CHECKOUT_OK ||
    (variant === VARIANT_CHECKOUT && !isTouchDevice);
  const s = isCustomStyles ? sCh : s1;

  const Row = ({ children }) => {
    if (!isCustomStyles) {
      return <div className={s['row']}>{children}</div>;
    } else {
      return <>{children}</>;
    }
  };

  return (
    <>
      <div className={s['item']({ variant })}>
        <Row>
          <div className={s['image']({ variant })}>
            <div className={s['image-border']({ variant })}>
              <ResponsiveImage
                image={image}
                widths={IMAGE_WIDTH_FOR_BP_PRODUCT_THUMB}
              />
            </div>
          </div>
          <div className={s['name']}>{name}</div>
          {variant !== VARIANT_CHECKOUT_OK && (
            <div className={s['delete']}>
              <SvgIcon
                name="Trash"
                className={s['delete__icon']}
                onClick={() => {
                  removeFromCart({ items_id: id });
                }}
              />
            </div>
          )}
        </Row>
        <Row>
          <div className={s['quantity']({ variant })}>{quantity} шт.</div>
          {variant !== VARIANT_CHECKOUT_OK && (
            <div className={s['counter']}>
              <Buy id={id} inCart={quantity}>
                <Buy.Counter />
              </Buy>
            </div>
          )}
          <div className={s['price-wrapper']({ variant })}>
            {quantity > 1 && (
              <div className={s['price__calc']({ variant })}>
                {quantity}×{price} грн
              </div>
            )}
            <div className={s['price']}>{cost} грн</div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default CartShortItem;
