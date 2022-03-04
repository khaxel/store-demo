import { useTranslation } from 'next-i18next';
import { CartShort as s, TOTAL_FIXED, TOTAL_POP } from './styles';
import { useCartList, useRemoveFromCart } from 'api/cart';
import { useQueryClient } from 'react-query';
import {
  handleMutationErrors,
  handleMutationSuccess,
} from 'components/common/mutationHandlers';
import { useUI } from 'components/UI/context';
import CartShortEmpty from './CartShortEmpty';
import CartShortItem from './CartShortItem';
import CartShortFooter from './CartShortFooter';
// import { TextLoading } from 'components/UI/Loading';

export const VARIANT_POPOVER = 'popover';
export const VARIANT_CHECKOUT = 'checkout';
export const VARIANT_CHECKOUT_OK = 'checkoutOk';

const CartShort = ({ variant = VARIANT_POPOVER }) => {
  const { t } = useTranslation('common');
  const { isTouchDevice } = useUI();
  const { data, isFetching } = useCartList({}, { initialData: { items: [] } });
  const { mutation: mutationRemove, remove } = useRemoveFromCart(['me']);
  const queryClient = useQueryClient();

  const removeFromCart = (params) => {
    // TODO Delayed delete
    remove(params);
  };
  handleMutationErrors(mutationRemove);
  handleMutationSuccess(mutationRemove, ({ data }) => {
    queryClient.invalidateQueries(['cart_product', data.items_id]);
  });

  return (
    <>
      <div className={s['cartShort']({ variant })}>
        {/* {isFetching && <TextLoading />} */}
        {!isFetching &&
          (!data || (!data.cart_products_count && <CartShortEmpty />))}
        {!!data && data.items.length > 0 && (
          <>
            <div className={s['cartShortItems']({ variant })}>
              {data.items.map((i, idx) => {
                return (
                  <CartShortItem
                    key={`cartItem${idx}`}
                    variant={variant}
                    id={i.id}
                    name={i.items_name}
                    price={i.price}
                    cost={i.cost}
                    quantity={i.quantity}
                    image={i.img}
                    removeFromCart={removeFromCart}
                  />
                );
              })}
            </div>

            {isTouchDevice && variant === VARIANT_CHECKOUT && (
              <div className={s['total']}>
                <div className={s['total__text']}>{t('Всего')}:</div>
                <div className={s['text__cost']}>{data.cart_total} грн</div>
              </div>
            )}
            {variant === VARIANT_POPOVER && (
              <CartShortFooter
                variant={isTouchDevice ? TOTAL_FIXED : TOTAL_POP}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};
export default CartShort;
