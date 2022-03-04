import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useQueryClient } from 'react-query';
import { reducer } from './BuyReducer';
import * as t from './BuyType';
import { useAddToCart, useRemoveFromCart } from 'api/cart';
import {
  handleMutationErrors,
  handleMutationSuccess,
} from 'components/common/mutationHandlers';
import { SvgIcon } from 'components/UI/svg';
import { Input } from 'components/UI/Form';
import { useDebounce } from 'utils/system';
import { Buy as s } from './styles';
import { Button } from 'components/UI/Button';

const BuyContext = React.createContext();

const Buy = ({
  children,
  id,
  inCart,
  setParentInCart = () => {},
  customStyles = {},
}) => {
  const queryClient = useQueryClient();
  const initState = { id, inCart, cs: customStyles, isFreezed: false };
  const [state, dispatch] = React.useReducer(reducer, initState);
  const { mutation: mutationAdd, add } = useAddToCart(['me']);
  const { mutation: mutationRemove, remove } = useRemoveFromCart(['me']);

  useEffect(() => {
    setId(id);
  }, [id]);

  useEffect(() => {
    setInCart(inCart);
    setParentInCart(inCart);
  }, [inCart]);

  const setId = (value) => dispatch({ type: t.SET_IS_ID, value });
  const setInCart = (value) => dispatch({ type: t.SET_IS_IN_CART, value });
  const setIsFreezed = (value) => dispatch({ type: t.SET_IS_FREEZED, value });

  const addToCart = (quantity) => {
    setIsFreezed(true);
    add({ items_id: state.id, quantity });
  };
  handleMutationErrors(mutationAdd);
  handleMutationSuccess(mutationAdd, ({ data }) => {
    queryClient.invalidateQueries(['cart_product', id]);
    const newCount = data.quantity;
    setInCart(newCount);
    setParentInCart(newCount);
    setIsFreezed(false);
  });

  const removeFromCart = (quantity) => {
    setIsFreezed(true);
    remove({ items_id: state.id, quantity });
  };
  handleMutationErrors(mutationRemove);
  handleMutationSuccess(mutationRemove, ({ data }) => {
    queryClient.invalidateQueries(['cart_product', id]);
    const newCount = data.quantity;
    setInCart(newCount);
    setParentInCart(newCount);
    setIsFreezed(false);
  });

  const goToCart = () => {
    // TODO
    alert('checkout');
  };

  const getMePrice = () => {
    // TODO
    alert('getMePrice');
  };

  const emailOnInStock = () => {
    // TODO
    alert('emailOnInStock');
  };

  const countToCart = (quantity) => {
    if (!state.isFreezed) {
      if (quantity < state.inCart) {
        removeFromCart(state.inCart - quantity);
      } else if (quantity > state.inCart) {
        addToCart(quantity - state.inCart);
      }
    }
  };

  const value = useMemo(
    () => ({
      ...state,
      setInCart,
      addToCart,
      countToCart,
      goToCart,
      getMePrice,
      emailOnInStock,
    }),
    [state]
  );

  return <BuyContext.Provider value={value}>{children}</BuyContext.Provider>;
};

const useBuy = () => {
  const context = React.useContext(BuyContext);
  if (context === undefined) {
    throw new Error(`useBuy must be used within a Buy`);
  }
  return context;
};

Buy.ButtonOutOfStock = ({ variant = 'blueL', icon = false }) => {
  const { t } = useTranslation('common');
  const { emailOnInStock } = useBuy();
  return (
    <Button variant={variant} onClick={emailOnInStock}>
      {icon ? (
        <SvgIcon name="Envelope" className={s['icon-envelope']} />
      ) : (
        t('Уведомить о наличии')
      )}
    </Button>
  );
};

Buy.ButtonOnBackorder = ({ variant = 'greenM' }) => {
  const { t } = useTranslation('common');
  const { getMePrice } = useBuy();
  return (
    <Button variant={variant} onClick={getMePrice}>
      {t('Узнать цену')}
    </Button>
  );
};

Buy.ButtonInCart = ({ variant = 'greenM2Str', icon = false }) => {
  const { inCart, goToCart } = useBuy();
  const { t } = useTranslation('common');
  return (
    <Button variant={variant} className={icon && 'relative'} onClick={goToCart}>
      {!icon ? (
        <>
          <div className={s['in-cart-row1']}>
            {inCart} {t('шт в корзине')}
            <SvgIcon name="ButtonCheck" className={s['in-cart-check']} />
          </div>
          <div className={s['in-cart-row2']}>{t('Перейти')}</div>
        </>
      ) : (
        <>
          <SvgIcon name="CartInButton" className={s['icon-cart']} />
          {inCart && (
            <SvgIcon name="CheckInCircle" className={s['icon-cart__check']} />
          )}
          )
        </>
      )}
    </Button>
  );
};

Buy.ButtonBuy = ({ variant = 'greenM', icon = false }) => {
  const { addToCart } = useBuy();
  const { t } = useTranslation('common');
  return (
    <Button
      variant={variant}
      className={icon && 'relative'}
      onClick={() => addToCart(1)}
    >
      {icon ? <SvgIcon name="CartInButton" className={s['icon-cart']} /> : t('Купить')}
    </Button>
  );
};

Buy.Counter = () => {
  const { inCart, countToCart } = useBuy();
  const [count, setCount] = useState(inCart);

  useEffect(() => {
    setCount(inCart);
  }, [inCart]);

  useDebounce({
    func: () => count !== inCart && countToCart(count),
    dependencies: [count],
  });

  return (
    <div className={s['buy__counter']}>
      <SvgIcon
        name="Minus"
        className={s['buy__sign']}
        onClick={() => {
          setCount(count - 1);
        }}
      />
      <Input
        value={count}
        onChange={(e) => {
          setCount(parseFloat(e.target.value) || 0);
        }}
        className={s['buy__input']}
      />
      <SvgIcon
        name="Plus"
        className={s['buy__sign']}
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
};

export { Buy, useBuy };
