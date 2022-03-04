import { useTranslation } from 'next-i18next';
import { SvgIcon } from 'components/UI/svg';
import { CartShortEmpty as s } from './styles';
import { Button } from 'components/UI/Button';
import { useUI } from 'components/UI/context';
import { useHeader } from 'components/Header/context';

const CartShortEmpty = () => {
  const { t } = useTranslation('common');
  const { closeCart, openDrawer, isTouchDevice } = useUI();
  const { showCatalog } = useHeader();

  const goToCatalogue = () => {
    closeCart();
    showCatalog();
    if (isTouchDevice){
      openDrawer();
    }
  };

  return (
    <div className={s['wrapper']}>
      <div className={s['icon']}>
        <SvgIcon name="ArrowToCart" className={s['icon-cart']} />
      </div>

      <div className={s['text']}>{t('Корзина пока пуста')}</div>
      <div className={s['replica']}>{t('Но это очень легко исправить')} :)</div>
      <Button
        variant="greenLong"
        onClick={goToCatalogue}
        className={s['button']}
      >
        {t('Перейти в каталог')}
      </Button>
    </div>
  );
};
export default CartShortEmpty;
