import { useEffect, useRef, useState } from 'react';
import { IMAGE_WIDTH_FOR_BP_PRODUCT_THUMB } from 'const';
import ResponsiveImage from 'components/common/ResponsiveImage';
import HeaderTop from './HeaderTop';
import HeaderTabs from './HeaderTabs';
import HeaderDesktopActions from './HeaderDesktopActions';
import { HeaderDesktop as s } from './styles';

export default function HeaderDesktop({ product: p }) {
  const refHeader = useRef();
  const [isSticked, setIsSticked] = useState(false);
  const [leftNav, setLeftNav] = useState(0);

  useEffect(() => {
    const checkTop = () => {
      if (refHeader.current) {
        const { top } = refHeader.current?.getBoundingClientRect();
        setIsSticked(top <= 0);
      }
    };

    window.addEventListener('scroll', checkTop);
    return () => {
      window.removeEventListener('scroll', checkTop);
    };
  }, []);

  return (
    <div ref={refHeader} className={s.wrapper({ isSticked })}>
      <div className={s.container({ isSticked })}>
        {isSticked && (
          <div className={s.image}>
            <div className={s.image__container}>
              <ResponsiveImage
                image={p.images[0]}
                widths={IMAGE_WIDTH_FOR_BP_PRODUCT_THUMB}
              />
            </div>
          </div>
        )}
        <div className={s.body({ isSticked })}>
          <HeaderTop product={p} isSticked={isSticked} />
          {!isSticked && (
            <div style={{ left: `${leftNav}px` }} className={s.tabline}></div>
          )}
          <HeaderTabs
            setLeftNav={setLeftNav}
            isSticked={isSticked}
            setIsSticked={setIsSticked}
          />
        </div>
        {isSticked && <HeaderDesktopActions product={p} />}
      </div>
    </div>
  );
}
