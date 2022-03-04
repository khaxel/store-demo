import cn from 'classnames';
import { TWTS } from 'const-styles';

export const HeaderDesktop = {
  wrapper: ({ isSticked }) =>
    cn(
      'bg-white flex flex-col xl:block xl:pb-0.5 xl:mb-0 xl:sticky xl:top-0 xl:z-10',
      isSticked ? 'shadow-lg xl:pt-13px xl:pb-13px xl:z-70' : 'xl:pt-11px'
    ),
  container: ({ isSticked }) =>
    cn(isSticked ? 'xl:flex xl:justify-between container-base' : 'xl:block'),
  image: cn(
    'flex grow-0 justify-center items-center mx-auto bg-white border border-lightStrokesGrey',
    'xl:w-74px xl:h-74px'
  ),
  image__container: cn('xl:block xl:w-70px xl:h-60px'),
  body: ({ isSticked }) => cn('relative', isSticked && 'grow ml-19px'),
  tabline: cn(
    'hidden bottom-0 right-0',
    'xl:block xl:absolute xl:border-b-2 xl:border-darkStrokesGreyLine'
  ),
};

export const HeaderDesktopActions = {
  actions: cn('grow-0 flex gap-5 items-center'),
  actions__price: cn('xl:relative'),
  'actions__price-prev': cn(
    'absolute line-through -top-19px text-lightTextColor whitespace-nowrap',
    TWTS.xl['Big']
  ),
  'actions__price-actual': cn('xl:relative', TWTS.xl['Large-bold']),
};

export const HeaderTop = {
  headerTop: cn('inline-block bg-white', 'md:block', 'xl:mb-0'),
  headerTop__container: cn('container-px xl:flex xl:justify-between'),
  headerTop__title: cn('pt-11px pb-2.5', 'xl:flex xl:py-0'),
  headerTop__h1: ({ isSticked }) =>
    cn(
      'es-h1 -mt-1 inline xl:flex xl:mt-0 mr-7px',
      TWTS.mob['H1-lg'],
      isSticked
        ? 'xl:text-17px xl:font-semibold xl:leading-5 xl:max-w-440px'
        : TWTS.xl['H1']
    ),
  headerTop__RatingStars: cn('xl:flex xl:relative xl:mt-5px xl:-top-px'),
  code: cn(
    'inline ml-1 text-lightBlack',
    'xl:flex xl:mt-2 xl:whitespace-nowrap'
  ),
  code__barcode: cn(
    'relative inline -top-px mr-1.5 w-5 h-17px',
    'xl:static xl:top-0 xl:w-21px xl:h-4.5 xl:mr-1.5'
  ),
  code__title: cn('text-basicDarkTextColor text-13px', TWTS.xl['Subbody']),
};

export const HeaderTabs = {
  tabs: ({ isSticked, isTouchDevice }) =>
    cn(
      'bg-white',
      'sticky top-52px z-20',
      isSticked && isTouchDevice ? 'shadow-bottom-lg' : '',
      'xl:static xl:top-auto xl:z-auto xl:bg-transparent',
      isSticked && !isTouchDevice && 'xl:absolute xl:-bottom-13px'
    ),
  tabs__container: ({ isSticked, isTouchDevice }) =>
    cn(
      'container-px flex items-baseline align-bottom overflow-x-auto no-scrollbar',
      isSticked && isTouchDevice ? 'h-35px' : ''
    ),
  fog: cn('fog-hrz-white absolute right-0 w-12 h-30px z-10'),
  item: ({ isActive }) =>
    cn(
      'flex whitespace-nowrap pt-0',
      'xl:text-0px xl:z-10',
      isActive ? 'h-35px' : 'relative top-3px h-8 xl:static xl:top-0'
    ),
  link: ({ isActive }) =>
    cn(
      'horizontal-link h-35px pt-9px',
      isActive && 'horizontal-link-active',
      'px-3.5 pb-1 inline-block text-center',
      !isActive && 'relative -top-3px pb-7px',
      isActive
        ? 'border-b-4 border-brandOrange'
        : 'border-b border-darkStrokesGrey',
      isActive && TWTS.mob['Body - bold'],
      !isActive && TWTS.mob['Body'],
      isActive && TWTS.xl['Subbody-bold'],
      !isActive && TWTS.xl['Subbody'],
      'xl:cursor-pointer xl:hover:text-midBlue',
      'xl:px-3.5',
      !isActive && 'xl:border-0 xl:pb-0.5 xl:static xl:top-0 xl:pb-1'
    ),
};

export const Product = {
  product: cn('container-content mt-5 xl:mt-28px'),
  body: cn('container-px', 'xl:mb-10 xl:min-h-0'),
  body__badges: cn('top-2.5 left-9px', 'xl:top-3 xl:left-42px'),
  body__thumbs: cn(
    'hidden',
    'xl:flex xl:justify-center xl:grow-0 xl:basis-94px'
  ),
  body__slider: cn(
    'flex justify-center relative w-full min-w-0 mb-3',
    'xl:min-h-351px xl:h-351px xl:mb-0'
  ),
  body__actions: cn('mb-35px', 'xl:relative xl:-top-2.5 xl:pl-1 xl:mb-0'),
  body__links: cn(
    TWTS.mob['Medium Clickable text'],
    'text-basicMidTextColor',
    'xl:self-end xl:relative xl:-bottom-1'
  ),
  body__descr: cn(
    TWTS.mob['Body'],
    'text-basicMidTextColor mt-11px',
    'xl:pt-13px xl:pl-30px xl:pr-30px',
    TWTS.xl['Body'],
    'xl:text-basicMidTextColor'
  ),
  body__info: cn('-mx-3', 'xl:mx-0 xl:w-256px'),
  body__characteristics: cn('mt-45px -mx-3', 'xl:mx-0 xl:mt-70px'),
  related: cn('mt-50px', 'xl:mt-70px'),
  'recently-viewed': cn('mt-50px', 'xl:mt-70px'),
};

export const Slider = {
  'slider-container': cn(
    'relative flex items-center justify-center bg-white border border-lightStrokesGrey min-w-0',
    'xl:w-435px xl:h-351px'
  ),
  'slider-wrapper': cn(
    'flex items-center justify-center min-w-0 px-39px py-9px',
    'xl:p-0'
  ),
  slider: cn('', 'xl:w-367px xl:h-317px'),
  'product-slider__prev': cn(
    'product-slider__prev absolute z-10 text-darkLightBlue -left-7px',
    'xl:-left-5 xl:hover:text-greyBlue xl:cursor-pointer'
  ),
  'product-slider__next': cn(
    'product-slider__next absolute z-10 text-darkLightBlue -right-7px',
    'xl:-right-5 xl:hover:text-greyBlue xl:cursor-pointer'
  ),
  'arrow-in-circle': 'w-38px h-38px shadow-circle',
  'arrow-in-circle-horizontal': 'rotate-180',
  'navigation-disabled': 'opacity-50 cursor-auto hover:text-darkLightBlue',
  'loupe-wrapper': cn(
    'hidden',
    'xl:block xl:absolute xl:top-2.5 xl:right-2.5 xl:text-greyBlue xl:hover:text-midBlue xl:cursor-pointer'
  ),
  loupe: cn('hidden', 'xl:block xl:w-21px xl:h-21px'),
};

export const Thumbs = {
  'slide-thumb': cn(
    'xl:flex xl:items-center xl:justify-center xl:bg-white xl:border xl:border-midLightBlue'
  ),
  'navigation-disabled': 'opacity-50 cursor-auto hover:text-darkLightBlue',
  'product-thumbs__prev': cn(
    'product-thumbs__prev xl:absolute xl:z-10 xl:-top-5 xl:cursor-pointer xl:text-darkLightBlue xl:hover:text-greyBlue'
  ),
  'product-thumbs__next': cn(
    'product-thumbs__next xl:absolute xl:z-10 xl:-bottom-5 xl:cursor-pointer xl:text-darkLightBlue xl:hover:text-greyBlue'
  ),
  'arrow-in-circle': 'xl:w-38px xl:h-38px shadow-circle',
  'rotate-180': 'xl:rotate-180',
};

export const BodyActions = {
  price: cn(''),
  status: cn(
    TWTS.mob['t16-22'],
    'flex items-end justify-end pb-5px text-basicDarkTextColor',
    TWTS.xl['Body'],
    'xl:justify-start xl:items-start xl:pt-1.5 xl:pb-0'
  ),
  buy: cn(
    'flex justify-between items-start pt-3.5',
    'md:justify-start',
    'xl:pt-0'
  ),
  'buy__btn-center': cn('flex justify-center w-full', 'md:justify-start'),
  stars: cn('flex items-start'),
  stars__reviews: cn(
    TWTS.mob['t15-18'],
    'relative top-0.5 ml-1.5 text-basicMidTextColor'
  ),
  actions: cn(
    TWTS.mob['t17-24-sb'],
    'flex justify-center items-center text-greyBlue',
    TWTS.xl['Body-semibold'],
    'xl:justify-start'
  ),
  actions__wish: cn(
    'w-31px h-28px mr-7px',
    'xl:w-22px xl:h-19px xl:mr-1 xl:relative xl:-top-0.5'
  ),
  actions__comparison: cn(
    'w-43px h-32px mr-11px',
    'xl:w-30px xl:h-21px xl:mr-1.5 xl:relative xl:-top-0.5'
  ),
  actions__divider: cn(
    'h-28px mx-3.5 border-l border-darkStrokesGrey',
    'xl:h-5 xl:mx-3'
  ),
  buy1click: cn('xl:mt-23px xl:max-w-297px'),
};

export const BodyPrice = {
  price: cn(
    'relative pt-2',
    'xl:flex xl:flex-row-reverse xl:justify-end xl:items-baseline xl:pt-0'
  ),
  prev: cn(
    TWTS.mob['Big'],
    'absolute -top-7px line-through text-lightTextColor whitespace-nowrap',
    'xl:static'
  ),
  actual: cn(TWTS.mob['Large-bold'], 'flex items-end'),
  'actual-red': cn('text-red pt-1.5', 'xl:pt-0 xl:pr-3'),
  'no-price': cn(
    'text-basicDarkTextColor',
    TWTS.xl['Body-semibold'],
    'xl:max-w-246px xl:mb-2'
  ),
};

export const BodyStatus = {
  instock: cn(
    'inline-block relative -top-1 w-15px h-3 mr-5px mb-0.5 text-green',
    'xl:top-0.5 xl:w-15px xl:h-12px xl:mr-3px xl:ml-px'
  ),
  outofstock: cn(
    'inline-block relative -top-3px w-13px h-13px mr-5px mb-0.5 text-red',
    'xl:w-13px xl:h-13px xl:mr-3px xl:top-0.5'
  ),
  onbackorder: cn(
    'inline-block w-19px h-19px mr-5px mb-0.5 text-yellow',
    'xl:w-19px xl:h-19px xl:mb-0 xl:mr-1 xl:relative xl:-top-px'
  ),
};

export const BodyBuy1Click = {
  label: cn(TWTS.mob['Big-semibold'], 'mb-1', 'xl:mb-2'),
  form: cn('xl:flex'),
  input: cn('h-42px px-2.5 py-9px inline'),
};

export const BodyLinks = {
  row: cn('mb-13px', 'xl:mb-5px xl:last:mb-0 xl:pl-1'),
  link: cn(TWTS.mob['Clickable text'], 'text-midBlue ml-0.5', 'xl:ml-0'),
};

export const BodyInfo = {
  wrapper: ({ isCollapsed }) =>
    cn(
      'xl:sticky xl:top-132px',
      isCollapsed && 'relative max-h-507px overflow-hidden'
    ),
  header: cn(TWTS.mob['H1'], 'mt-34px mb-9px ml-3', 'xl:hidden'),
  content: ({ isCollapsed }) =>
    cn(
      'relative bg-white border-t border-b border-darkStrokesGrey',
      isCollapsed && 'border-b-0 mb-0',
      'xl:border xl:mb-0'
    ),
  lists: cn('', 'xl:max-h-full'),
  lists_collapsed: cn('max-h-190px overflow-hidden'),
  list: cn(
    'border-b border-darkStrokesGrey last:border-none px-3',
    'xl:px-17px'
  ),
  list__item: cn(
    'border-b border-darkStrokesGrey last:border-none pt-15px pb-13px',
    'xl:pt-2.5 xl:pb-9px'
  ),
  list__item_header: cn(
    TWTS.mob['Body - bold'],
    'text-lightBlack',
    TWTS.xl['Body-bold']
  ),
  list__item_regular: cn(
    TWTS.mob['Body'],
    'text-basicMidTextColor',
    TWTS.xl['Body']
  ),
};

export const BodyCharacteristics = {
  wrapper: ({ isCollapsed }) =>
    cn(isCollapsed && 'relative max-h-507px overflow-hidden'),
  header: cn(
    TWTS.mob['H1'],
    'mx-3 mb-9px text-black',
    TWTS.xl['H1'],
    'xl:mx-0 xl:mb-7px'
  ),
  block__header: cn(
    TWTS.mob['H3'],
    'flex items-center min-h-48px mb-4 px-3 bg-bgLightBlue border-t border-b border-midStrokesGrey text-black',
    TWTS.xl['H3'],
    'xl:h-52px xl:mb-11px xl:px-23px xl:border xl:border-darkStrokesGrey'
  ),
  content: cn(
    'border-t border-b border-darkStrokesGrey',
    'xl:flex xl:border-0'
  ),
  content_first: 'mb-35px',
  column: cn(
    'bg-white',
    'xl:w-1/2 xl:last:ml-6 xl:pt-0 xl:border xl:border-darkStrokesGrey'
  ),
  item: cn(
    'flex justify-between mx-3 border-b last:border-b-0 border-darkStrokesGrey pt-15px pb-13px',
    'xl:mx-23px xl:pt-17px xl:pb-3'
  ),
  key: cn(
    TWTS.mob['Body-semibold'],
    TWTS.xl['Body-semibold'],
    'mr-2 text-basicDarkTextColor',
    'xl:mr-5'
  ),
  values: cn(
    TWTS.mob['Body'],
    TWTS.xl['Body-medium'],
    'text-basicMidTextColor'
  ),
};

export const BodyUtils = {
  fog: cn('fog-vrt-white absolute w-full h-115px bottom-0'),
  roll: cn(
    TWTS.mob['t15-18-b'],
    'flex items-center ml-3 py-15px text-brandOrange',
    'xl:hidden'
  ),
  roll_collapsed: cn(
    TWTS.mob['t15-18-b'],
    'absolute bottom-0 py-0',
    'xl:hidden'
  ),
  roll__icon: cn('text-brandOrange w-9px h-9px ml-1', 'xl:hidden'),
  roll__icon_rotated: cn('rotate-180'),
};
