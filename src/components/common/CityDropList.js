import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { CloseSimple } from 'components/UI/svg';
import { useOutsideClick } from 'utils/hooks';
import { CityDropList as s, VARIANT_TOP } from './styles';

export const CityDropList = ({
  isExpanded,
  setIsExpanded,
  cities,
  setSelectedCity,
  variant = VARIANT_TOP,
}) => {
  const { t } = useTranslation('common');
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (!isExpanded) {
      return;
    }
    setIsExpanded(false);
  });

  return (
    <div ref={ref} className={s['wrapper']({ isExpanded, variant })}>
      <div className={s['title']}>{`${t('Выберите город')}:`}</div>
      <div
        className={s['close']}
        onClick={() => {
          setIsExpanded(false);
        }}
      >
        <CloseSimple className={s['close-icon']} />
      </div>

      {!!cities &&
        cities.map((city, index) => {
          return (
            <div
              key={city.name}
              className={s['city']({ isSelected: city.isSelected, index })}
              onClick={() => {
                setSelectedCity(city.id);
                setIsExpanded(false);
              }}
            >
              {t(city.name)}
            </div>
          );
        })}
    </div>
  );
};
