import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useUI } from 'components/UI/context';
import { BodyCharacteristics as s, BodyUtils as us } from './styles';
import { SvgIcon } from 'components/UI/svg';

export default function BodyCharacteristics({
  attributesMain: main,
  attributesAdditional: additional,
}) {
  const { t } = useTranslation('common');
  const { isTouchDevice } = useUI();
  const [isCollapsed, setIsCollapsed] = useState(isTouchDevice);

  useEffect(() => {
    setIsCollapsed(isTouchDevice);
  }, [isTouchDevice]);

  // TODO Right data from API
  main = [main, additional];
  additional = [...main];
  // console.log('', [...additional[0], ...additional[1]]);

  return (
    <div className={s['wrapper']({ isCollapsed })}>
      <div className={s['header']}>{t('Характеристики')}</div>
      {main.length && (
        <>
          <div className={s['block__header']}>
            {t('Основные характеристики')}
          </div>
          <div className={cn(s['content'], s['content_first'])}>
            {isTouchDevice && <OneColumn data={[...main[0], ...main[1]]} />}
            {!isTouchDevice && <TwoColumns data={main} />}
          </div>
        </>
      )}

      {additional.length && (
        <>
          <div className={s['block__header']}>
            {t('Дополнительные характеристики')}
          </div>
          <div className={s['content']}>
            {isTouchDevice && (
              <OneColumn data={[...additional[0], ...additional[1]]} />
            )}
            {!isTouchDevice && <TwoColumns data={additional} />}
          </div>
        </>
      )}

      {isTouchDevice && (main.length || additional.length) && (
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

const OneColumn = ({ data }) => {
  return (
    <div className={s['column']}>
      {data.map((item, index) => {
        const values = item.terms.map((t) => t.term_name).join(', ');
        return (
          <div className={s['item']} key={`charItem${index}`}>
            <div className={s['key']}>{item.attribute_name}</div>
            <div className={s['values']}>{values}</div>
          </div>
        );
      })}
    </div>
  );
};

const TwoColumns = ({ data }) => {
  return data.map((columnData, index) => {
    return <OneColumn data={columnData} key={`charCol${index}`} />;
  });
};
