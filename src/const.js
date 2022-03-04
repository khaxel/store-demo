export const origin = process.env.NEXT_PUBLIC_ORIGIN;

export const HEADER_MODE_NORMAL = 'normal';
export const HEADER_MODE_SLIM = 'slim';

export const ROLE_GUEST = 'guest';
export const ROLE_USER = 'user';

export const LANG_RU = 1;
export const LANG_UA = 2;
export const LANGS = {
  [LANG_RU]: 'ru',
  [LANG_UA]: 'uk',
};
export const LANG_BY_NAME = {
  ru: LANG_RU,
  uk: LANG_UA,
};
export const LANG_NAMES = ['ru', 'uk'];
export const DEFAULT_LANG_NAME = 'ru';
export const LOCALE_RU = 'ru';
export const LOCALE_UA = 'uk';

// export const RESOLUTIONS = ['sm', 'md', 'xl', '3xl'];
export const BP = {
  sm: 360,
  md: 768,
  xl: 1280,
  '3xl': 1920,
};

export const AUTH_FORM_MODE_LOGIN = 'login';
export const AUTH_FORM_MODE_REGISTER = 'register';

export const PASSWORD_MIN_LENGTH = 6;

export const CAT_COLUMNS_COUNT_BP = [
  { count: 40, bps: { xl: 4 } },
  { count: 30, bps: { xl: 3 } },
  { count: 20, bps: { xl: 2 } },
];

export const FILTER_TYPE_MANUFACTURERS = 'manufacturers';
export const FILTER_TYPE_ATTRIBUTES = 'attributes';
export const FILTER_TYPE_ATTRIBUTES_SELECT = 'select';
export const FILTER_TYPE_ATTRIBUTES_COLOR = 'color';
export const FILTER_TYPE_PRICE = 'price';
export const FILTER_TYPE_PRICE_FROM = 'price_from';
export const FILTER_TYPE_PRICE_TO = 'price_to';
export const FILTER_TYPE_ORDER = 'orderBy';

export const FILTER_SEPARATOR = 'f';
export const FILTER_TERMS_SEPARATOR = '|';

export const PRODUCT_STATUS_INSTOCK = 'instock';
export const PRODUCT_STATUS_ONBACKORDER = 'onbackorder';
export const PRODUCT_STATUS_OUTOFSTOCK = 'outofstock';

export const COUNTER_CART = 'cart';
export const COUNTER_WISHLIST = 'wishlist';
export const COUNTER_COMPARISON = 'comparison';
export const COUNTER_RECENTLY_VIEWED = 'recently_viewed';

export const IMAGE_WIDTH_FOR_BP_PRODUCT_MAIN = {
  srcSet: [256, 442],
  src: 442,
  bpSizes: {
    [BP['sm']]: 256,
    [BP['md']]: 442,
    [BP['xl']]: 442,
    [BP['3xl']]: 442,
  },
};
export const IMAGE_WIDTH_FOR_BP_PRODUCT_THUMB = {
  srcSet: [98],
  src: 98,
  bpSizes: {
    [BP['sm']]: 98,
  },
};
export const IMAGE_WIDTH_FOR_BP_PRODUCT_MODAL_SLIDER = {
  srcSet: [660],
  src: 660,
  bpSizes: {
    [BP['md']]: 660,
  },
};
export const IMAGE_WIDTH_FOR_BP_PRODUCT_CARD = {
  srcSet: [156, 256],
  src: 256,
  bpSizes: {
    [BP['sm']]: 156,
    [BP['md']]: 256,
    [BP['xl']]: 256,
    [BP['3xl']]: 256,
  },
};

// TODO Uncomment after API ready
// export const IMAGE_WIDTH_FOR_BP_ARTICLE_CARD = {
//   srcSet: [212, 360],
//   src: 360,
//   bpSizes: {
//     [BP['sm']]: 212,
//     // [BP['md']]: 256,
//     [BP['xl']]: 201,
//     // [BP['3xl']]: 256,
//   },
// };
// export const IMAGE_WIDTH_FOR_BP_ARTICLE_MAIN = {
//   srcSet: [360],
//   src: 360,
//   bpSizes: {
//     [BP['sm']]: 336,
//     // [BP['md']]: 256,
//     [BP['xl']]: 360,
//     // [BP['3xl']]: 256,
//   },
// };
export const IMAGE_WIDTH_FOR_BP_ARTICLE_CARD = {
  srcSet: [256],
  src: 256,
  bpSizes: {
    [BP['sm']]: 256,
    [BP['md']]: 256,
    [BP['xl']]: 256,
    [BP['3xl']]: 256,
  },
};
export const IMAGE_WIDTH_FOR_BP_ARTICLE_MAIN = {
  srcSet: [256],
  src: 256,
  bpSizes: {
    [BP['sm']]: 256,
    [BP['md']]: 256,
    [BP['xl']]: 256,
    [BP['3xl']]: 256,
  },
};

export const CARDS_IN_SHORT_GRID = 4;

export const DELIVERY_SELF = 'self';
export const DELIVERY_ADDRESS = 'address';
export const DELIVERY_NP_COURIER = 'np_courier';
export const DELIVERY_NP_SELF = 'np_self';
export const PAYMENT_ON_DELIVERY = 'on_delivery';
export const PAYMENT_CASHLESS_VAT = 'cashless_vat';
export const PAYMENT_CASHLESS = 'cashless';
export const PAYMENT_PRIVAT_CARD = 'privat_card';
