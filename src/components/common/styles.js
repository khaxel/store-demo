import cn from 'classnames';
import { TWTS } from 'const-styles';

export const VARIANT_TOP = 'top';
export const VARIANT_INLINE = 'inline';

export const Breadcrumbs = {
  breadcrumbs: cn(
    'container-px flex items-baseline justify-start flex-nowrap overflow-x-auto no-scrollbar',
    'mt-15px mb-2',
    TWTS.mob['Clickable text'],
    'md:flex-wrap md:mb-5px',
    'xl:mt-4 xl:mb-11px xl:overflow-auto',
    TWTS.xl['Remark text']
  ),
  item: cn(
    'flex flex-nowrap items-baseline min-w-max text-midBlue xl:hover:text-midBlueHover hover-semibold-shadow_blue'
  ),
  link: cn('whitespace-nowrap mr-7px inline', 'xl:mr-3px'),
  notLink: cn('whitespace-nowrap text-greyBlue inline'),
  arrow: cn(
    'w-5px h-2 mr-1.5 relative top-px',
    'xl:w-1 xl:h-1.5 xl:mr-3px xl:static'
  ),
  fog: cn('fog-hrz-gray absolute right-0 w-12 h-35px -mt-35px'),
};

export const ModalSlider = {
  'slider-container': cn('xl:relative xl:w-800px'),
  'slider-wrapper': cn(
    'xl:flex xl:items-center xl:justify-center xl:border-b xl:border-lightStrokesGrey xl:relative xl:py-15px'
  ),
  slider: cn('xl:w-526px xl:h-454px'),
  'modal-slider__prev': cn(
    'modal-slider__prev xl:absolute xl:z-20 xl:-left-5 xl:cursor-pointer xl:text-darkLightBlue xl:hover:text-greyBlue'
  ),
  'modal-slider__next': cn(
    'modal-slider__next xl:absolute xl:z-20 xl:-right-5 xl:cursor-pointer xl:text-darkLightBlue xl:hover:text-greyBlue'
  ),
  'arrow-in-circle': 'xl:w-38px xl:h-38px shadow-circle',
  'rotate-180': 'xl:rotate-180',
  'navigation-disabled': 'opacity-50 cursor-auto hover:text-darkLightBlue',
  'modal-slider-thumbs': cn('xl:flex xl:items-center xl:relative'),
  'slide-thumb': cn(
    'xl:flex xl:items-center xl:justify-center xl:bg-white xl:border xl:border-midLightBlue'
  ),
  close: cn(
    'xl:absolute xl:-top-9px xl:-right-9px xl:w-23px xl:h-23px xl:z-10',
    'xl:rounded-full  xl:bg-white xl:text-greyBlue shadow-circle-s',
    'xl:flex xl:justify-center xl:items-center xl:cursor-pointer',
    'xl:hover:text-greyBlueDark'
  ),
  'icon-cross': cn('w-9px h-9px'),
};

export const Overlay = {
  overlay:
    'es-overlay xl:absolute xl:inset-x-0 xl:top-102px xl:bottom-0 xl:bg-lightBlack xl:opacity-20 3xl:top-111px',
};

export const Account = {
  account: cn(
    'flex justify-between items-baseline py-11px text-basicDarkTextColor border-y border-darkStrokesGrey',
    'xl:border-none xl:block xl:p-0',
    TWTS.mob['t15-20']
  ),
  text: cn('xl:inline-block', TWTS.xl['Body']),
  icon: cn('w-5px h-9px ml-2.5'),
  button: cn('xl:inline-block xl:ml-4'),
  'signin-button': cn(''),
};

export const CityDropList = {
  wrapper: ({ isExpanded, variant }) =>
    cn(
      'py-15px md:py-5',
      variant === VARIANT_INLINE &&
        'absolute -inset-x-1 bg-white border border-lightStrokesGrey rounded z-50 shadow-sm flex justify-around pl-6',
      variant === VARIANT_INLINE &&
        'xl:inset-x-auto xl:bg-transparent xl:flex xl:justify-start',
      'xl:absolute xl:px-17px xl:py-11px xl:-mr-47px xl:bg-white xl:border xl:border-lightStrokesGrey xl:rounded xl:z-50',
      isExpanded ? 'flex' : 'hidden xl:hidden',
      variant === VARIANT_TOP && 'xl:top-34px',
      variant === VARIANT_INLINE && 'xl:top-21px',
      TWTS.xl['Remark text']
    ),
  title: cn(
    'hidden',
    'xl:block xl:absolute xl:text-13px xl:text-lightTextColor'
  ),
  close: cn(
    'hidden',
    'xl:block xl:absolute xl:right-4 xl:p-1 xl:-mr-1 xl:text-greyBlue xl:hover:text-greyBlueDark xl:cursor-pointer'
  ),
  'close-icon': cn('w-2 h-2'),
  city: ({ isSelected, index }) =>
    cn(
      'pl-5 py-2 text-15px whitespace-nowrap',
      'xl:mx-0 xl:mt-26px xl:text-13px xl:cursor-pointer',
      isSelected &&
        'pr-5 bg-extraLightBlue text-lightBlack rounded font-semibold ' +
          'mr-26px md:mr-6 ' +
          'xl:px-13px xl:py-1.5',
      !isSelected &&
        'mr-6 md:mr-26px pr-1 text-lightTextColor ' +
          'xl:mr-0 xl:px-0 xl:py-1.5 bold-shadow_light_black_hover',
      !isSelected && index === 0 && 'xl:ml-0',
      index !== 0 && 'xl:ml-7'
    ),
};

export const ArticleTableOfContents = {
  wrapper: cn(
    'block bg-white mb-12',
    'xl:ml-55px xl:mb-0 xl:w-280px xl:min-w-280px xl:h-full',
    'xl:sticky xl:top-4'
  ),
  item: ({ isActive }) =>
    cn(
      'cursor-pointer',
      isActive
      ? 'text-midBlue bold-shadow_blue border-midBlue border-l-4'
      : 'text-lightBlack cursor-pointer xl:hover:text-midBlue hover-semibold-shadow_blue',
      TWTS.mob['Body-semibold'],
      TWTS.xl['Remark text-semibold'],
    ),
  item__body: ({ isActive, prevIsActive, isLast }) =>
    cn(
      'min-h-57px px-4 py-3 flex items-center',
      isActive && '-ml-px pl-13px border-t border-t-midLightBlue',
      !isActive && !prevIsActive && 'border-t border-t-lightStrokesGrey',
      prevIsActive && 'border-t border-t-midLightBlue',
      isLast && isActive && 'border-b border-b-midLightBlue',
      isLast && !isActive && 'border-b border-b-lightStrokesGrey'
    ),
};
