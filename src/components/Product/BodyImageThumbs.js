import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SvgIcon } from 'components/UI/svg';
import { IMAGE_WIDTH_FOR_BP_PRODUCT_THUMB } from 'const';
import ResponsiveImage from 'components/common/ResponsiveImage';
import { Thumbs as s } from './styles';

export default function BodyImageThumbs({ setThumbsSwiper, images }) {
  return (
    <div className="w-94px max-h-526px xl:flex xl:justify-center xl:relative">
      <div className={s['product-thumbs__prev']}>
        <SvgIcon
          name="ArrowInCircleVertical"
          className={s['arrow-in-circle']}
        />
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        direction={'vertical'}
        navigation={{
          nextEl: '.product-thumbs__next',
          prevEl: '.product-thumbs__prev',
          disabledClass: s['navigation-disabled'],
        }}
        mousewheel={true}
        spaceBetween={14}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
      >
        {images.map((i, idx) => {
          return (
            <SwiperSlide
              key={`prodImgThumb${idx}`}
              className={s['slide-thumb']}
            >
              <ResponsiveImage
                image={i}
                widths={IMAGE_WIDTH_FOR_BP_PRODUCT_THUMB}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={s['product-thumbs__next']}>
        <SvgIcon
          name="ArrowInCircleVertical"
          className={cn(s['arrow-in-circle'], s['rotate-180'])}
        />
      </div>
    </div>
  );
}
