import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SvgIcon } from 'components/UI/svg';
import { Slider as s } from './styles';
import Card from 'components/ProductGrid/Card';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
SwiperCore.use([FreeMode, Navigation, Thumbs]);

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ProductSlider({ products, swiperKey, slidesPerView, zIndex }) {
  const _swiperKey = `SWK${swiperKey}`;
  return (
    <div className={s['slider-container']({zIndex})}>
      <div className={cn(s['product-slider__prev'], `${_swiperKey}__prev`)}>
        <SvgIcon
          name="ArrowInCircleHorizontal"
          className={cn(s['arrow-in-circle'], s['arrow-in-circle-horizontal'])}
        />
      </div>
      <div className={s['slider-wrapper']({ productsCount: products.length })}>
        {/* Force reinit (rerender) Swiper on change number of products */}
        {products.length >= 5 && (
          <ProductSwiper
            products={products}
            swiperKey={_swiperKey}
            slidesPerView={!!slidesPerView ? slidesPerView : 5}
          />
        )}
        {products.length < 5 && (
          <ProductSwiper
            products={products}
            swiperKey={_swiperKey}
            slidesPerView={products.length}
          />
        )}
      </div>
      <div className={cn(s['product-slider__next'], `${_swiperKey}__next`)}>
        <SvgIcon
          name="ArrowInCircleHorizontal"
          className={s['arrow-in-circle']}
        />
      </div>
    </div>
  );
}

const ProductSwiper = ({ products, slidesPerView, swiperKey }) => {
  return (
    <Swiper
      navigation={{
        nextEl: `.${swiperKey}__next`,
        prevEl: `.${swiperKey}__prev`,
        disabledClass: s['navigation-disabled'],
      }}
      slidesPerView={slidesPerView}
      cssMode={true}
      spaceBetween={5}
    >
      {products.map((item, idx) => {
        return (
          <SwiperSlide key={`prodSlide${idx}`}>
            <Card item={item} key={`item${idx}`} isHoverAbsolute={false} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
