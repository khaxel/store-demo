import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useCartList } from 'api/cart';
import { useUI } from 'components/UI/context';
import { CartShort as s, TOTAL_FIXED, TOTAL_POP } from './styles';
import { Button } from 'components/UI/Button';

const CartShortFooter = ({ variant, button }) => {
  const router = useRouter();
  const { closeCart } = useUI();
  const { data } = useCartList(
    {},
    { initialData: { items: [] }, queryConfig: { refetchOnMount: false } }
  );

  const checkout = () => {
    router.push('/checkout');
    closeCart();
  };

  return (
    <>
      {!!data && data.items.length > 0 && (
        <Footer
          cart_total={data.cart_total}
          button={button}
          checkout={checkout}
          variant={variant}
        />
      )}
    </>
  );
};

const Footer = ({ cart_total, button, checkout, variant }) => {
  const { t } = useTranslation('common');
  const [isSticked, setIsSticked] = useState(true);
  const refStick = useRef();

  useEffect(() => {
    const check = () => {
      if (refStick.current) {
        const height = typeof window !== 'undefined' ? window.innerHeight : 0;
        const { bottom } = refStick.current?.getBoundingClientRect();
        setIsSticked(bottom === height);
      }
    };

    window.addEventListener('scroll', check);
    return () => {
      window.removeEventListener('scroll', check);
    };
  }, []);

  return (
    <div className={s['footer']({ variant, isSticked })} ref={refStick}>
      <div className={s['footer__text']({ variant })}>
        <div className={s['text__key']({ variant })}>
          {t('Всего')}
          {(variant === TOTAL_POP || variant === TOTAL_FIXED ) && <>:</>}
        </div>
        <div className={s['text__value']({ variant })}>{cart_total} грн</div>
      </div>
      <div className={s['footer__button']({ variant })}>
        {!!button && button}
        {!button && (
          <Button variant="green" onClick={checkout}>
            {t('Оформить заказ')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartShortFooter;
