import cn from 'classnames';
import { TWTS } from 'const-styles';

export const Buy = {
  'in-cart-row1': cn(
    TWTS.mob['Small text'],
    TWTS.xl['Small text'],
    'whitespace-nowrap'
  ),
  'in-cart-row2': cn(
    TWTS.mob['t14-18-b'],
    TWTS.xl['Remark text-bold'],
    'xl:-mt-3px'
  ),
  'in-cart-check': cn('inline-block w-2.5 h-2.5 mb-px ml-1'),
  buy__counter: cn('flex items-center', 'md:mr-5'),
  buy__sign: cn('w-22px h-22px', 'xl:w-15px xl:h-15px xl:cursor-pointer'),
  buy__input: cn(
    'inline-block w-11 h-11 mx-3 px-2.5 py-9px text-center',
    'xl:w-38px xl:h-38px xl:mx-9px',
    TWTS.mob["t17-24-sb"],
    TWTS.xl['Body-semibold'],
  ),
  'icon-cart': cn('w-29px h-27px relative -left-px', 'xl:w-26px xl:h-24px'),
  'icon-cart__check': cn(
    'absolute right-2 top-7px w-3 h-3 text-greenEmeraldHover'
  ),
  'icon-envelope': cn('w-30px h-21px', 'xl:w-24px xl:h-17px'),
};

export const Slider = {
  'slider-container': ({ zIndex="xl:z-10" }) =>
    cn(
      'relative flex items-center justify-center min-w-0',
      'xl:border-t-2 xl:border-l xl:border-darkBackgroundGray xl:bg-darkBackgroundGray',
      'xl:h-371px xl:justify-start xl:min-w-min',
      zIndex
    ),
  'slider-wrapper': ({ productsCount }) =>
    cn(
      'flex items-center justify-center min-w-0 px-39px py-9px',
      'xl:p-0',
      'xl:absolute xl:h-full xl:items-start xl:justify-start',
      productsCount >= 5 ? 'xl:w-full' : ''
    ),
  'product-slider__prev': cn(
    'absolute z-10 text-darkLightBlue -left-7px',
    'xl:-left-5 xl:hover:text-greyBlue xl:cursor-pointer'
  ),
  'product-slider__next': cn(
    'absolute z-10 text-darkLightBlue -right-7px',
    'xl:-right-5 xl:hover:text-greyBlue xl:cursor-pointer'
  ),
  'arrow-in-circle': 'w-38px h-38px shadow-circle',
  'arrow-in-circle-horizontal': 'rotate-180',
  'navigation-disabled': 'opacity-50 cursor-auto hover:text-darkLightBlue',
};

export const ProductsLine = {
  header: cn('mb-4 ml-3', 'xl:mb-3 xl:ml-0', TWTS.mob['H1'], TWTS.xl['H1']),
  categories: cn('flex ml-3 overflow-x-auto no-scrollbar', 'xl:ml-0'),
  list: cn('mt-5px'),
  fog: cn('fog-hrz-white absolute right-0 w-12 h-38px z-10'),
  more: cn(
    'flex items-center justify-center mt-11px py-3 text-brandOrange',
    TWTS.mob['Bold Clickable text']
  ),
  more__icon: cn('w-17px h-19px mr-2'),
};
