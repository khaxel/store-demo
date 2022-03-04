import { useTranslation } from 'next-i18next';
import { useUI } from 'components/UI/context';
import { ProductsLine as s } from './styles';
import { useEffect, useState } from 'react';
import { ButtonRound } from 'components/UI';
import ProductSlider from 'components/ProductCommon/ProductSlider';
import { MobileGrid } from './MobileGrid';
import { CARDS_IN_SHORT_GRID } from 'const';
import { SvgIcon } from 'components/UI/svg';

export default function ProductsLine({
  title,
  list,
  swiperKey = '',
  filterIdFieldName = 'id',
  filterTitleFieldName = 'title',
  slidesPerView,
  zIndex,
}) {
  const { t } = useTranslation('common');
  const { isTouchDevice } = useUI();
  const [categories, setCategories] = useState(list.categories);
  const [items, setItems] = useState(list.items);

  useEffect(() => {
    setCategories(list.categories);
    setItems(list.items);
  }, [list]);

  let initItems = {};
  if (isTouchDevice) {
    initItems = items.filter((i, idx) => idx < CARDS_IN_SHORT_GRID);
  } else {
    initItems = items;
  }

  const [activeFilterId, setAvtiveFilterId] = useState(0);
  const [displayedItems, setDisplayedItems] = useState(initItems);
  const [displayedItemsCount, setDisplayedItemsCount] = useState(items.length);

  useEffect(() => {
    if (isTouchDevice) {
      setDisplayedItems(items.filter((_, idx) => idx < CARDS_IN_SHORT_GRID));
      setDisplayedItemsCount(CARDS_IN_SHORT_GRID);
    } else {
      setDisplayedItems(items);
      setDisplayedItemsCount(items.length);
    }
  }, [isTouchDevice, items]);

  const filterList = ({ filterId }) => {
    setAvtiveFilterId(filterId);
    if (isTouchDevice) {
      setDisplayedItemsCount(CARDS_IN_SHORT_GRID);
      setNewList({ filterId, count: CARDS_IN_SHORT_GRID });
    } else {
      setNewList({ filterId });
    }
  };

  const setNewList = ({ count = null, filterId = null }) => {
    const newCount = count !== null ? count : displayedItemsCount;
    const _filterId = filterId !== null ? filterId : activeFilterId;
    let newList;

    if (_filterId === 0) {
      newList = isTouchDevice
        ? items.filter((_, idx) => idx < newCount)
        : items;
    } else {
      newList = items.filter(
        (i) => parseInt(i.category_id) === parseInt(_filterId)
      );
      newList = newList.filter((_, idx) => idx < newCount);
    }
    setDisplayedItems(newList);
  };

  const more = () => {
    const newCount = displayedItemsCount + CARDS_IN_SHORT_GRID;
    setDisplayedItemsCount(newCount);
    setNewList({ count: newCount });
  };

  return (
    <>
      {!!title && (
        <>
          <div className={s['header']}>{title}</div>
          {isTouchDevice && <div className={s['fog']}></div>}
        </>
      )}

      {!!categories && (
        <div className={s['categories']}>
          <ButtonRound
            onClick={() => filterList({ filterId: 0 })}
            isActive={activeFilterId === 0}
          >
            {t('Все товары')}
          </ButtonRound>
          {categories.length > 0 &&
            categories.map((cat) => {
              return (
                <ButtonRound
                  key={`catFilter${cat[filterIdFieldName]}`}
                  onClick={() =>
                    filterList({ filterId: cat[filterIdFieldName] })
                  }
                  isActive={activeFilterId === cat[filterIdFieldName]}
                >
                  {cat[filterTitleFieldName]}
                </ButtonRound>
              );
            })}
        </div>
      )}

      <div className={s['list']}>
        {isTouchDevice && (
          <>
            <MobileGrid data={displayedItems} />
            {displayedItemsCount <= displayedItems.length && (
              <div onClick={more} className={s['more']}>
                <SvgIcon name="Refresh" className={s['more__icon']} />
                {t('Показать больше товаров')}
              </div>
            )}
          </>
        )}
        {!isTouchDevice && (
          <ProductSlider
            products={displayedItems}
            swiperKey={swiperKey}
            slidesPerView={slidesPerView}
            zIndex={zIndex}
          />
        )}
      </div>
    </>
  );
}
