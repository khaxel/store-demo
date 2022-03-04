import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useUI } from 'components/UI/context';
import { HeaderTabs as s } from './styles';
import useIOHeadings from 'utils/useIOHeadings';
import { HEADER_MODE_NORMAL, HEADER_MODE_SLIM } from 'const';
import { useDebounce } from 'utils/system';

export default function HeaderTabs({
  setLeftNav = () => {},
  isSticked,
  setIsSticked,
}) {
  const { isTouchDevice, setHeaderMode } = useUI();
  const { t } = useTranslation('common');
  const refHeader = useRef();
  const [activeId, setActiveId] = useState();
  useIOHeadings({
    setActiveId,
    containerId: '.product-contentsAnchorRoot',
    handlingElements: 'div.contentsAnchor',
    rootMargin: '-20% 0px 0px 0px',
    isEnabled: { isTouchDevice },
  });

  useEffect(() => {
    const { left } = refHeader.current.getBoundingClientRect();
    setLeftNav(left);

    if (!isTouchDevice) return;

    const checkTop = () => {
      const { top } = refHeader.current.getBoundingClientRect();
      const _isSticked = top <= 52;
      setIsSticked(_isSticked);
      setHeaderMode(_isSticked ? HEADER_MODE_SLIM : HEADER_MODE_NORMAL);
    };

    window.addEventListener('scroll', checkTop);
    return () => {
      window.removeEventListener('scroll', checkTop);
    };
  }, [isTouchDevice, isSticked]);

  useDebounce({
    func: () => () => {
      if (!activeId || activeId === 'content-about') return;
      const el = document.querySelector(`#navId-${activeId}`);
      el.scrollIntoView({ inline: 'center' });
    },
    dependencies: [activeId],
  });

  const NavItem = ({ children, id }) => {
    const isActive = activeId === id;
    return (
      <li className={s.item({ isActive })} id={`navId-${id}`}>
        <a className={s.link({ isActive })} title={children} href={`#${id}`}>
          {children}
        </a>
      </li>
    );
  };

  const navs = [
    { id: 'content-about', title: t('О товаре') },
    { id: 'content-descr', title: t('Описание товара') },
    { id: 'content-char', title: t('Характеристики') },
    // { id: 'content-review', title: t('Отзывы') },
    { id: 'content-related', title: t('Сопутствующие товары') },
    { id: 'content-recently-viewed', title: t('Недавно просмотренные товары') },
    // { id: 'content-video', title: t('Видеообзор') },
    // { id: 'content-docs', title: t('Документы') },
  ];

  return (
    <div className={s.tabs({ isSticked, isTouchDevice })}>
      <ul
        ref={refHeader}
        className={s.tabs__container({ isSticked, isTouchDevice })}
      >
        {navs.map((i) => (
          <NavItem key={i.id} id={i.id}>
            {i.title}
          </NavItem>
        ))}
        {isTouchDevice && <li className={s['fog']}></li>}
      </ul>
    </div>
  );
}
