import { useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGE_WIDTH_FOR_BP_PRODUCT_MAIN } from 'const';
import { useUI } from 'components/UI/context';
import { ModalSlider } from 'components/common/ModalSlider';
import ResponsiveImage from 'components/common/ResponsiveImage';
import { SvgIcon } from 'components/UI/svg';
import { Slider as s } from './styles';
// import { getIsTouchDevice } from 'utils/useDevice';

export default function BodyImageSlider({ thumbsSwiper, images }) {
  const { isTouchDevice } = useUI();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlideInModalSlider, setActiveSlideInModalSlider] =
    useState(false);
  // const initIsTouchDevice = getIsTouchDevice();

  return (
    <div className={s['slider-container']}>
      <div className={s['slider-wrapper']}>
        <div className={s['product-slider__prev']}>
          <SvgIcon
            name="ArrowInCircleHorizontal"
            className={cn(
              s['arrow-in-circle'],
              s['arrow-in-circle-horizontal']
            )}
          />
        </div>

        <Swiper
          navigation={{
            nextEl: '.product-slider__next',
            prevEl: '.product-slider__prev',
            disabledClass: s['navigation-disabled'],
          }}
          mousewheel={true}
          thumbs={{ swiper: thumbsSwiper }}
          // thumbs={!initIsTouchDevice ? { swiper: thumbsSwiper } : false}
          className={s['slider']}
          centeredSlides={true}
          slidesPerView={1}
          onActiveIndexChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {images.map((i, idx) => {
            return (
              <SwiperSlide
                key={`prodSlide${idx}`}
                onClick={() => {
                  !isTouchDevice && setActiveSlideInModalSlider(activeIndex);
                }}
              >
                <ResponsiveImage
                  image={i}
                  widths={IMAGE_WIDTH_FOR_BP_PRODUCT_MAIN}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={s['product-slider__next']}>
          <SvgIcon
            name="ArrowInCircleHorizontal"
            className={s['arrow-in-circle']}
          />
        </div>

        <div
          className={s['loupe-wrapper']}
          onClick={() => {
            setActiveSlideInModalSlider(activeIndex);
          }}
        >
          <SvgIcon name="LoupePlus" className={s['loupe']} />
        </div>
      </div>

      {activeSlideInModalSlider !== false && (
        <ModalSlider
          images={images}
          activeSlideIndex={activeSlideInModalSlider}
          onClose={() => setActiveSlideInModalSlider(false)}
        />
      )}
    </div>
  );
}
