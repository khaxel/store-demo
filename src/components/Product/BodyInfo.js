import { Fragment, useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useUI } from 'components/UI/context';
import { BodyInfo as s, BodyUtils as us } from './styles';
import { SvgIcon } from 'components/UI/svg';

// TODO Remove after API
const data = {
  shipping: [
    'Самовивіз - безкоштовно (Київ, Дніпро,Одеса)',
    'По Києву - безкоштовно',
    'По Україні - оплата послуг перевізника',
  ],
  payment: [
    'Готівкова оплата',
    'Безготівкова оплата з ПДВ',
    'Картою будь-якого банку',
    'Післяплата на Новій Пошті',
  ],
  warranty: ['Офіційна - 12 міс.', 'Обмін/повернення - 14 днів'],
};

export default function BodyInfo({ data }) {
  const { t } = useTranslation('common');
  const { isTouchDevice } = useUI();
  const [isCollapsed, setIsCollapsed] = useState(isTouchDevice);
  // console.log('data', data);
  useEffect(() => {
    setIsCollapsed(isTouchDevice);
  }, [isTouchDevice]);

  const headers = {
    shipping: t('Доставка'),
    payment: t('Оплата'),
    warranty: t('Гарантия'),
  };

  return (
    <div className={s['wrapper']({ isCollapsed })}>
      <div className={s['header']}>{t('Доставка, оплата, гарантия')}</div>
      <div className={cn(s['content']({ isCollapsed }))}>
        <div className={cn(s['lists'], isCollapsed && s['lists_collapsed'])}>
          {Object.keys(headers).map((key) => {
            return (
              <Fragment key={`list_${key}`}>
                {!!data[key] && data[key].length > 0 && (
                  <ul className={s['list']}>
                    <li className={cn(s['list__item'], s['list__item_header'])}>
                      {headers[key]}
                    </li>
                    {data[key].map((item, index) => (
                      <li
                        key={`item_${index}`}
                        className={cn(s['list__item'], s['list__item_regular'])}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      {isTouchDevice && (
        <>
          <div className={cn(isCollapsed && us['fog'])}></div>

          <div
            className={cn(us['roll'], isCollapsed && us['roll_collapsed'])}
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            {t(isCollapsed ? 'Развернуть' : 'Свернуть')}
            <SvgIcon
              name="DoubleChevronDown"
              className={cn(
                us['roll__icon'],
                !isCollapsed && us['roll__icon_rotated']
              )}
            />
          </div>
        </>
      )}
    </div>
  );
}
