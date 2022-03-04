import cn from 'classnames';
import { TWTS } from 'const-styles';
import {
  VARIANT_CHECKOUT,
  VARIANT_CHECKOUT_OK,
  VARIANT_POPOVER,
} from './CartShort';

export const TOTAL_POP = 'pop'; // xl in a cart popover
export const TOTAL_FIXED = 'fixed'; // mob in a cart bottom fixed
export const TOTAL_STICKY = 'sticky'; // mob in checkout bottom
export const TOTAL_BLOCK = 'block'; // xl in checkout right panel

export const CartShort = {
  cartShort: ({ variant }) =>
    cn(
      'es-cartShort container-px',
      variant === VARIANT_POPOVER && cn('pb-88px', 'xl:pb-0'),
      variant === VARIANT_CHECKOUT && cn('pb-17px', 'xl:py-0 xl:px-28px'),
      variant === VARIANT_CHECKOUT_OK && cn('pb-0', 'xl:py-0 xl:px-28px')
    ),
  cartShortItems: ({ variant }) =>
    cn(
      'overflow-auto',
      variant === VARIANT_CHECKOUT || variant === VARIANT_CHECKOUT_OK
        ? 'xl:pb-0'
        : 'xl:pb-58px'
    ),
  item: 'font-bold',
  'icon-trash': cn('', 'xl:w-19px xl:h-5 cursor-pointer'),
  total: cn('flex flex-col items-end mt-4'),
  total__text: cn('text-basicDarkTextColor', TWTS.mob['Body']),
  text__cost: cn('text-lightBlack', TWTS.mob['t17-27-b']),
  footer: ({ variant, isSticked }) =>
    cn(
      variant === TOTAL_STICKY && 'sticky -mx-3',
      variant === TOTAL_BLOCK && '',
      (variant === TOTAL_POP || variant === TOTAL_FIXED) &&
        'fixed inset-x-0 mx-0',
      'bottom-0 flex items-center justify-between h-72px pt-3 px-3 pb-3 bg-white',
      isSticked ? 'shadow-top' : '',
      variant === TOTAL_POP &&
        'xl:absolute xl:inset-x-0 xl:mx-0 xl:shadow-none xl:rounded xl:px-4',
      variant === TOTAL_BLOCK &&
        cn(
          'xl:block xl:h-full xl:mt-3 xl:p-0 xl:pt-3',
          'xl:border-0 xl:shadow-none xl:bg-transparent xl:border-t xl:border-darkStrokesGrey'
        )
    ),
  footer__text: ({ variant }) =>
    cn(
      'text-black',
      variant === TOTAL_POP && 'xl:-mb-1 xl:-mt-px',
      variant === TOTAL_BLOCK &&
        cn(
          'xl:flex xl:items-baseline xl:justify-between xl:mt-1.5 xl:pb-4 xl:border-b xl:border-darkStrokesGrey'
        )
    ),
  footer__button: ({ variant }) =>
    cn(
      variant === TOTAL_BLOCK && 'xl:flex xl:w-full xl:justify-center xl:my-5'
    ),
  text__key: ({ variant }) =>
    cn(
      '',
      variant === TOTAL_POP &&
        cn(
          'xl:inline-block xl:text-basicDarkTextColor',
          TWTS.xl['Body-semibold']
        ),
      variant === TOTAL_STICKY && cn('mb-1', TWTS.mob['Remark text']),
      variant === TOTAL_FIXED &&
        cn('text-basicDarkTextColor', TWTS.mob['t15-20-sb']),
      variant === TOTAL_BLOCK &&
        cn('xl:text-basicDarkTextColor', TWTS.xl['Body'])
    ),
  text__value: ({ variant }) =>
    cn(
      'text-lightBlack',
      variant === TOTAL_POP && 'xl:inline-block xl:ml-1',
      variant === TOTAL_BLOCK && 'xl:inline-block',
      TWTS.mob['t17-17-b-p']
    ),
};

export const CartShortEmpty = {
  wrapper: cn(
    'es-cartShortEmpty flex flex-col justify-center items-center min-h-238px pb-11px relative top-90px',
    'xl:static xl:justify-end'
  ),
  icon: cn(
    'bg-white w-177px h-177px rounded-full flex justify-center items-center',
    'xl:bg-transparent xl:w-auto xl:h-auto'
  ),
  'icon-cart': cn('w-98px h-88px -ml-5'),
  text: cn('mt-13px mb-3px', 'xl:mb-0', TWTS.mob['H3'], TWTS.xl['H3']),
  replica: cn('text-basicDarkTextColor', TWTS.mob['Body'], TWTS.xl['Body']),
  button: cn('mt-7', 'xl:mt-5'),
};

export const CartShortItem = {
  item: () =>
    cn(
      'border-b border-midStrokesGrey py-0.5',
      'xl:first:m-0 xl:first:p-0 xl:pt-3 xl:pb-0'
    ),
  row: cn(
    'es-cart-row flex justify-between items-center py-14px',
    'xl:first:pt-0 xl:pt-7px xl:first:pb-7px xl:pb-15px'
  ),
  image: ({ variant }) =>
    cn(
      'self-start flex justify-center grow-0',
      variant !== VARIANT_POPOVER && 'items-center',
      variant === VARIANT_POPOVER && 'items-start'
    ),
  'image-border': ({variant}) =>
    cn(
      'flex justify-center items-center border border-lightStrokesGrey bg-white',
      'w-76px min-w-76px h-76px p-1',
      variant === VARIANT_POPOVER && 'xl:w-50px xl:min-w-50px xl:h-50px',
      (variant === VARIANT_CHECKOUT || variant === VARIANT_CHECKOUT_OK) &&
        'xl:w-65px xl:max -w-65px xl:h-65px xl:min-h-65px'
    ),
  name: cn(
    'grow ml-15px mr-2',
    'text-basicDarkTextColor xl:self-center xl:ml-11px',
    TWTS.mob['Body'],
    TWTS.xl['Body']
  ),
  delete: cn('grow-0 p-2.5', 'xl:p-5px xl:self-center cursor-pointer'),
  delete__icon: cn('w-19px h-5 text-greyBlue', 'xl:hover:text-midBlue'),
  quantity: ({ variant }) =>
    cn(
      '-mb-0.5 text-lightTextColor',
      variant !== VARIANT_CHECKOUT_OK && 'xl:hidden',
      TWTS.mob['Body']
    ),
  counter: cn('grow flex justify-end', 'xl:self-end'),
  'price-wrapper': () =>
    cn('min-w-115px', 'xl:min-w-76px xl:self-end xl:mb-11px'),
  price: cn('flex justify-end', TWTS.mob['t17-17-b-p']),
  price__calc: ({ variant }) =>
    cn(
      'flex justify-end text-lightTextColor',
      variant === VARIANT_CHECKOUT && 'mb-0.5',
      variant !== VARIANT_CHECKOUT && 'mb-7px',
      TWTS.mob['Body'],
      TWTS.xl['Remark text']
    ),
};

export const CartShortItemCheckout = {
  item: ({ variant }) =>
    cn(
      variant !== VARIANT_CHECKOUT_OK && 'cart-item-grid py-0.5',
      variant === VARIANT_CHECKOUT_OK && 'cart-item-grid-no-act py-14px',
      'border-b border-midStrokesGrey last:border-none',
      'xl:first:m-0 xl:pt-11px xl:pb-11px xl:border-b xl:last:border-none xl:border-midStrokesGrey'
    ),
  row: cn(''),
  image: ({ variant }) =>
    cn(
      'cig-img flex justify-center',
      variant !== VARIANT_CHECKOUT_OK && 'items-center',
      variant === VARIANT_CHECKOUT_OK && 'items-start'
    ),
  'image-border': ({ variant }) =>
    cn(
      'flex justify-center items-center border border-lightStrokesGrey bg-white p-0.5',
      variant === VARIANT_CHECKOUT_OK &&
        'w-76px min-w-76px max-w-76px h-76px min-h-76px max-h-76px',
      'xl:w-65px xl:min-w-65px xl:max-w-65px xl:h-65px xl:min-h-65px xl:max-h-65px'
    ),
  name: cn(
    'cig-nam text-basicDarkTextColor min-h-62px',
    'xl:flex xl:items-center',
    TWTS.mob['Body'],
    TWTS.xl['Body']
  ),
  delete: cn('cig-act xl:flex xl:items-center xl:p-5px cursor-pointer'),
  delete__icon: cn('w-19px h-5 text-greyBlue xl:hover:text-midBlue'),
  quantity: ({ variant }) =>
    cn(
      variant === VARIANT_CHECKOUT_OK &&
        cn(
          'cig-qtt flex items-end text-lightTextColor',
          'xl:items-center xl:mt-0.5',
          TWTS.xl['Body']
        ),
      variant !== VARIANT_CHECKOUT_OK && 'xl:hidden',
      TWTS.mob['Body']
    ),
  counter: cn('cig-ctr xl:flex xl:items-center xl:mr-3'),
  'price-wrapper': ({ variant }) =>
    cn(
      'cig-prc flex flex-col justify-center items-end min-w-76px',
      variant !== VARIANT_CHECKOUT_OK && 'xl:mr-4',
      variant === VARIANT_CHECKOUT_OK && 'xl:mr-0'
    ),
  price__calc: () => cn('text-lightTextColor', TWTS.xl['Body']),
  price: cn('text-lightBlack', TWTS.mob['t17-17-b-p'], TWTS.xl['t17-15-b']),
};
