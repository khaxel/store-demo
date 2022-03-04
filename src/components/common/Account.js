import { ButtonRound } from 'components/UI';
import { SvgIcon } from 'components/UI/svg';
import { useTranslation } from 'next-i18next';
import { Account as s } from './styles';

export const Account = ({ variant = 'mBlockXlInline' }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className={s['account']}>
        <div className={s['text']}>{t('Уже есть аккаунт')}?</div>
        <div className={s['button']}>
          <ButtonRound variant="Orange" className={s['signin-button']}>
            {t('Войти в кабинет')}
            <SvgIcon name="RightArrow" className={s['icon']} />
          </ButtonRound>
        </div>
      </div>
    </>
  );
};
