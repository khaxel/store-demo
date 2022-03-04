export const TEXT_STYLES = {
  'mob': {
    '360: H1' : 'font-weight: 600; font-size: 20px; line-height: 24px;',
    '360: H2' : 'font-weight: bold; font-size: 18px; line-height: 24px;',
    '360: H3' : 'font-weight: 600; font-size: 16px; line-height: 20px;',
    '360: Medium Clickable text' : 'font-weight: normal; font-size: 15px; line-height: 20px;',
    '360: Clickable text' : 'font-weight: 600; font-size: 15px; line-height: 20px;',
    '360: Bold Clickable text' : 'font-weight: bold; font-size: 15px; line-height: 20px;',
    '360: Body' : 'font-weight: normal; font-size: 14px; line-height: 18px;',
    '360: Body - bold' : 'font-weight: bold; font-size: 14px; line-height: 18px;',
    '360: Body-semibold' : 'font-weight: 600; font-size: 14px; line-height: 18px;',
    '360: Remark text' : 'font-weight: normal; font-size: 12px; line-height: 16px;',
    '360: Text link' : 'font-weight: normal; font-size: 14px; line-height: 18px;',
    '360: Tag text' : 'font-weight: 900; font-size: 10px; line-height: 16px; letter-spacing: 0.01em;',
    '360: 1-line button text' : 'font-weight: bold; font-size: 16px; line-height: 26px;',
    '360: 2-lines button text' : 'font-weight: bold; font-size: 14px; line-height: 15px;',
  },
  'xl' : {
    '1280: H1' : 'font-weight: 600; font-size: 20px; line-height: 32px;',
    '1280: H1-bold' : 'font-weight: bold; font-size: 20px; line-height: 32px;',
    '1280: H3' : 'font-weight: 600; font-size: 17px; line-height: 24px;',
    '1280: H4' : 'font-weight: bold; font-size: 16px; line-height: 23px;',
    '1280: Body' : 'font-weight: normal; font-size: 15px; line-height: 20px;',
    '1280: Body-semibold' : 'font-weight: 600; font-size: 15px; line-height: 20px;',
    '1280: Body-bold' : 'font-weight: bold; font-size: 15px; line-height: 20px;',
    '1280: Card text' : 'font-weight: 600; font-size: 15px; line-height: 22px;',
    '1280: Subbody' : 'font-weight: normal; font-size: 14px; line-height: 18px;',
    '1280: Subbody-semibold' : 'font-weight: 600; font-size: 14px; line-height: 18px;',
    '1280: Subbody-bold' : 'font-weight: bold; font-size: 14px; line-height: 19px;',
    '1280: Remark text' : 'font-weight: normal; font-size: 13px; line-height: 16px;',
    '1280: Remark text-semibold' : 'font-weight: 600; font-size: 13px; line-height: 16px;',
    '1280: Remark text-bold' : 'font-weight: bold; font-size: 13px; line-height: 16px;',
    '1280: Text link' : 'font-weight: normal; font-size: 15px; line-height: 20px;',
    '1280: Tag text' : 'font-weight: 900; font-size: 10px; line-height: 16px; letter-spacing: 0.01em;',
    '1280: Small text' : 'font-weight: normal; font-size: 12px; line-height: 18px;',
  }
}

// Style replace for tailwind
export const TEXT_STYLES_TW_REPLACES = {
  'font-weight: normal;': 'font-normal',
  'font-weight: 600;': 'font-semibold',
  'font-weight: bold;': 'font-bold',
  'font-weight: 700;': 'font-bold',
  'font-weight: 900;': 'font-black',
  
  'font-size: 10px;': 'text-10px',
  'font-size: 12px;': 'text-xs',
  'font-size: 13px;': 'text-13px',
  'font-size: 14px;': 'text-sm',
  'font-size: 15px;': 'text-15px',
  'font-size: 16px;': 'text-base',
  'font-size: 17px;': 'text-17px',
  'font-size: 18px;': 'text-lg',
  'font-size: 20px;': 'text-xl',
  
  'line-height: 12px;': 'leading-12px',
  'line-height: 15px;': 'leading-15px',
  'line-height: 16px;': 'leading-4',
  'line-height: 18px;': 'leading-4.5',
  'line-height: 19px;': 'leading-19px',
  'line-height: 20px;': 'leading-5',
  'line-height: 22px;': 'leading-5.5',
  'line-height: 23px;': 'leading-23px',
  'line-height: 24px;': 'leading-6',
  'line-height: 26px;': 'leading-6',
  'line-height: 27px;': 'leading-27px',
  'line-height: 32px;': 'leading-8',
  
  'letter-spacing: 0.01em;': 'tracking-01',
}

// Generated in text-styles.js
const TWTS = {
  "mob": {
    "H1": "font-semibold text-xl leading-6",
    "H2": "font-bold text-lg leading-6",
    "H3": "font-semibold text-base leading-5",
    "Medium Clickable text": "font-normal text-15px leading-5",
    "Clickable text": "font-semibold text-15px leading-5",
    "Bold Clickable text": "font-bold text-15px leading-5",
    "Body": "font-normal text-sm leading-4.5",
    "Body - bold": "font-bold text-sm leading-4.5",
    "Body-semibold": "font-semibold text-sm leading-4.5",
    "Remark text": "font-normal text-xs leading-4",
    "Text link": "font-normal text-sm leading-4.5",
    "Tag text": "font-black text-10px leading-4 tracking-01",
    "1-line button text": "font-bold text-base leading-6",
    "2-lines button text": "font-bold text-sm line-height: 15px;",
  },
  "xl": {
    "H1": "xl:font-semibold xl:text-xl xl:leading-8",
    "H1-bold": "xl:font-bold xl:text-xl xl:leading-8",
    "H3": "xl:font-semibold xl:text-17px xl:leading-6",
    "H4": "xl:font-bold xl:text-base xl:leading-23px",
    "Body": "xl:font-normal xl:text-15px xl:leading-5",
    "Body-semibold": "xl:font-semibold xl:text-15px xl:leading-5",
    "Body-bold": "xl:font-bold xl:text-15px xl:leading-5",
    "Card text": "xl:font-semibold xl:text-15px xl:leading-5.5",
    "Subbody": "xl:font-normal xl:text-sm xl:leading-4.5",
    "Subbody-semibold": "xl:font-semibold xl:text-sm xl:leading-4.5",
    "Subbody-bold": "xl:font-bold xl:text-sm xl:leading-19px tracking-005",
    "Remark text": "xl:font-normal xl:text-13px xl:leading-4",
    "Remark text-semibold": "xl:font-semibold xl:text-13px xl:leading-4",
    "Remark text-bold": "xl:font-bold xl:text-13px xl:leading-4",
    "Text link": "xl:font-normal xl:text-15px xl:leading-5",
    "Tag text": "xl:font-black text-10px xl:leading-4 xl:tracking-01",
    "Small text": "xl:font-normal xl:text-xs xl:leading-4.5"
  }
};

// Additional styles
TWTS.mob["ES dropdown"] = "font-normal text-sm leading-15px tracking-01";
TWTS.mob["H1-lg"] = "font-semibold text-lg leading-6";
TWTS.mob["H3-bold"] = "font-bold text-base leading-5 tracking-005";
TWTS.mob["Big"] = "font-normal text-17px leading-27px";
TWTS.mob["Big-semibold"] = "font-semibold text-17px leading-27px";
TWTS.mob["Large-bold"] = "font-bold text-23px leading-37px";
TWTS.mob["Small text"] = "font-normal text-xs leading-4.5";
TWTS.mob["t13-18"] = "font-normal text-13px leading-4.5";
TWTS.mob["t14-18-b"] = "font-semibold text-sm leading-4.5";
TWTS.mob["t16-22"] = "font-normal text-base leading-5.5";
TWTS.mob["t15-18"] = "font-normal text-15px leading-4.5";
TWTS.mob["t15-20"] = "font-normal text-15px leading-5";
TWTS.mob["t15-20-sb"] = "font-semibold text-15px leading-5";
TWTS.mob["t15-18-b"] = "font-bold text-15px leading-4.5";
TWTS.mob["t17-24-sb"] = "font-semibold text-17px leading-6";
TWTS.mob["t17-17-b-p"] = "font-bold text-17px leading-17px tracking-p";
TWTS.mob["t17-27-b"] = "font-bold text-17px leading-27px";
TWTS.mob["t14-23"] = "font-normal text-sm leading-23px";

TWTS.xl["Large-bold"] = "xl:font-bold xl:text-23px xl:leading-37px";
TWTS.xl["Big"] = "xl:font-normal xl:text-17px xl:leading-27px";
TWTS.xl["2-lines button text"] = "xl:font-bold xl:text-xs xl:leading-12px";
TWTS.xl["Body-medium"] = "xl:font-medium xl:text-15px xl:leading-4.5";
TWTS.xl["t14-23-b"] = "xl:font-bold xl:text-sm xl:leading-23 xl:tracking-p";
TWTS.xl["t17-15-b"] = "xl:font-bold xl:text-17px xl:leading-15px";
TWTS.xl["t17-27-b"] = "xl:font-bold xl:text-17px xl:leading-27";

export { TWTS };