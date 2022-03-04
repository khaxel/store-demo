import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { LOCALE_RU, LOCALE_UA } from 'const';
import { TWTS } from 'const-styles';

const Langs = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const currentLang = router.locale;

  const activeStyle = 'text-basicDarkTextColor border-basicDarkTextColor';
  const inactiveStyle =
    'border-newGrey text-lightTextColor ' +
    'xl:hover:text-basicMidTextColor xl:hover:border-lightTextColor';

  return (
    <div
      className={cn(
        'z-10 flex items-center relative -mt-px -mr-0.5 text-15px leading-none',
        'md:mt-0 md:mr-0 md:text-sm',
        'xl:flex xl:items-center xl:relative xl:-mt-9px xl:mr-0',
        TWTS.xl['Remark text'],
        '3xl:text-15px 3xl:mt-0'
      )}
    >
      <div className={cn('text-base mr-3', 'xl:hidden')}>{t('Язык сайта')}</div>
      <Link href={router.asPath} locale={LOCALE_UA}>
        <a>
          <div
            className={cn(
              'border rounded-l-full pt-2.5 pr-3 pb-2.5 pl-3.5 bg-white',
              'md:pt-1 md:pr-3 md:pb-1 md:pl-3.5',
              'xl:h-5 z19px xl:pt-0.5 xl:pr-5px xl:pb-0 xl:pl-7px xl:cursor-pointer',
              '3xl:pt-4px 3xl:pr-1.5 3xl:pb-5px 3xl:pl-2.5',
              currentLang === LOCALE_UA ? activeStyle : inactiveStyle
            )}
          >
            Укр
          </div>
        </a>
      </Link>
      <Link href={router.asPath} locale={LOCALE_RU}>
        <a>
          <div
            className={cn(
              'border rounded-r-full pt-2.5 pr-4 pb-2.5 pl-2.5 bg-white',
              'md:pt-1 md:pr-3.5 md:pb-1 md:pl-2.5',
              'xl:h-5 z19px xl:pt-0.5 xl:pr-2 xl:pb-0 xl:pl-1 xl:cursor-pointer xl:my-auto',
              '3xl:pt-4px 3xl:pr-2.5 3xl:pb-5px 3xl:pl-7px',
              currentLang === LOCALE_RU ? activeStyle : inactiveStyle
            )}
          >
            Рус
          </div>
        </a>
      </Link>
    </div>
  );
};
export default Langs;
