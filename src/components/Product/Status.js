import React from 'react';
import { useTranslation } from 'next-i18next';
import { PRODUCT_STATUS_ONBACKORDER, PRODUCT_STATUS_OUTOFSTOCK } from 'const';
import { SvgIcon } from 'components/UI/svg';
import { BodyStatus as s } from './styles';

const Status = ({ stock_status }) => {
  const { t } = useTranslation('common');
  return (
    <>
      {stock_status === PRODUCT_STATUS_OUTOFSTOCK ? (
        <SvgIcon
          name="CrossX"
          className={s['outofstock']}
        />
      ) : stock_status === PRODUCT_STATUS_ONBACKORDER ? (
        <SvgIcon
          name="Clock"
          className={s['onbackorder']}
        />
      ) : (
        <SvgIcon
          name="Check"
          className={s['instock']}
        />
      )}
      {t(stock_status)}
    </>
  );
};

export default Status;
