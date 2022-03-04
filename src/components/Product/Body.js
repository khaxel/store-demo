import { useState } from 'react';
import cn from 'classnames';
// import { useUI } from 'components/UI/context';
import BodyCharacteristics from './BodyCharacteristics';
import BodyImageThumbs from './BodyImageThumbs';
import BodyImageSlider from './BodyImageSlider';
import { Product as s } from './styles';
import ps from './product.module.css';
import BodyActions from './BodyActions';
import { Badges } from 'components/ProductCommon';
import BodyLinks from './BodyLinks';
import BodyInfo from './BodyInfo';

export default function Body({ product }) {
  // const { isTouchDevice } = useUI();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={cn(ps['product-grid'], s['body'])}>
      {/* {!isTouchDevice && ( */}
      <div className={cn(ps['pg-tmb'], s['body__thumbs'])}>
        <BodyImageThumbs
          setThumbsSwiper={setThumbsSwiper}
          images={product.images}
        />
      </div>
      {/* )} */}
      <div
        className={cn(ps['pg-sld'], s['body__slider'], 'contentsAnchor')}
        id={'content-about'}
      >
        <Badges badges={product.badges || []} className={s['body__badges']} />
        <BodyImageSlider thumbsSwiper={thumbsSwiper} images={product.images} />
      </div>
      <div className={cn(ps['pg-act'], ps['act-grid'], s['body__actions'])}>
        <BodyActions product={product} />
      </div>
      <div className={cn(ps['pg-lnk'], s['body__links'])}>
        <BodyLinks product={product} />
      </div>
      <div
        className={cn(ps['pg-dsc'], s['body__descr'], 'contentsAnchor')}
        id={'content-descr'}
        dangerouslySetInnerHTML={{
          __html: product.description,
        }}
      >
        {/* {product.description} */}
      </div>

      <div className={cn(ps['pg-inf'], s['body__info'])}>
        {/* TODO Add data from API */}
        <BodyInfo data={product.infoSPW} />
      </div>

      <div
        className={cn(
          ps['pg-chr'],
          s['body__characteristics'],
          'contentsAnchor'
        )}
        id={'content-char'}
      >
        <BodyCharacteristics
          attributesMain={product.items_attributes_main}
          attributesAdditional={product.items_attributes}
        />
      </div>
    </div>
  );
}
