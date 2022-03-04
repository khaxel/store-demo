import cn from 'classnames';
import { useState } from 'react';
import Portal from '@reach/portal';
import { SvgIcon } from 'components/UI/svg';
import { ModalSlider as s } from './styles';
import { ModalOverlay } from 'components/UI/ModalOverlay';
import { ModalWrapper } from 'components/UI/ModalWrapper';
import ResponsiveImage from 'components/common/ResponsiveImage';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
SwiperCore.use([FreeMode, Navigation, Thumbs]);
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGE_WIDTH_FOR_BP_PRODUCT_MODAL_SLIDER, IMAGE_WIDTH_FOR_BP_PRODUCT_THUMB } from 'const';

const CloseInCircle = ({ onClick }) => {
  return (
    <div className={s['close']} onClick={onClick}>
      <SvgIcon name="Cross" className={s['icon-cross']} />
    </div>
  );
};

export const ModalSlider = ({ images, activeSlideIndex = 0, onClose }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Portal>
      <ModalOverlay onClose={onClose}>
        <ModalWrapper onClose={onClose}>
          <div className={s['slider-container']}>
            <CloseInCircle onClick={onClose} />
            <div className={s['slider-wrapper']}>
              <div className={s['modal-slider__prev']}>
                <SvgIcon
                  name="ArrowInCircleHorizontal"
                  className={cn(s['arrow-in-circle'], s['rotate-180'])}
                />
              </div>

              <Swiper
                navigation={{
                  nextEl: '.modal-slider__next',
                  prevEl: '.modal-slider__prev',
                  disabledClass: s['navigation-disabled'],
                }}
                mousewheel={true}
                thumbs={{ swiper: thumbsSwiper }}
                className={s['slider']}
                onSwiper={(swiper) => {
                  swiper.slideTo(activeSlideIndex, 0);
                }}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={140}
              >
                {images.map((i, idx) => {
                  return (
                    <SwiperSlide key={`slide${idx}`}>
                      <ResponsiveImage
                        image={i}
                        widths={IMAGE_WIDTH_FOR_BP_PRODUCT_MODAL_SLIDER}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className={s['modal-slider__next']}>
                <SvgIcon
                  name="ArrowInCircleHorizontal"
                  className={s['arrow-in-circle']}
                />
              </div>
            </div>

            <Swiper
              onSwiper={setThumbsSwiper}
              navigation={false}
              mousewheel={true}
              spaceBetween={0}
              slidesPerView={8}
              freeMode={true}
              watchSlidesProgress={true}
              className="modal-slider-thumbs"
            >
              {images.map((i, idx) => {
                return (
                  <SwiperSlide
                    key={`slideThumb${idx}`}
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
          </div>
        </ModalWrapper>
      </ModalOverlay>
    </Portal>
  );
};
