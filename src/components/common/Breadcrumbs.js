import { Fragment } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useUI } from 'components/UI/context';
import { SvgIcon } from 'components/UI/svg';
import { Breadcrumbs as s } from './styles';

const Breadcrumbs = ({ initLinks }) => {
  const { breadcrumbs, isTouchDevice } = useUI();
  const { t } = useTranslation('common');

  const firstLink = {
    href: '/',
    title: t('Главная'),
  };

  const allBreadcrumbs =
    breadcrumbs.length > 0
      ? [firstLink, ...breadcrumbs]
      : [firstLink, ...initLinks];

  return (
    <>
      <nav className={s.breadcrumbs}>
        {allBreadcrumbs.map((lnk, index) => (
          <Fragment key={`breadcrumb${index}`}>
            {index <= allBreadcrumbs.length - 2 ? (
              <span className={s.item}>
                <Link href={`${lnk.href}`}>
                  <a className={s.link}>{lnk.title}</a>
                </Link>
                <SvgIcon name="RightArrow" className={s.arrow} />
              </span>
            ) : (
              <span className={s.notLink}>{lnk.title}</span>
            )}
          </Fragment>
        ))}
      </nav>
      {isTouchDevice && <div className={s.fog}></div>}
    </>
  );
};

export { Breadcrumbs };
