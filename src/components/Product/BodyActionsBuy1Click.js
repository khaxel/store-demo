import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { InputButton } from 'components/UI/Form';
import { BodyBuy1Click as s } from './styles';

export default function BodyActionsBuy1Click({}) {
  const { t } = useTranslation('common');

  const btnClick = () => {
    // TODO
  };

  return (
    <>
      <div className={cn(s['label'])}>{t('Купить в один клик')}</div>
      <div className={cn(s['form'])}>
        <InputButton
          btnTitle={t('Купить в 1 клик')}
          btnOnClick={btnClick}
          placeholder="+38 XXX XX XX"
          // className={cn(s['input'])}
        />
      </div>
    </>
  );
}
