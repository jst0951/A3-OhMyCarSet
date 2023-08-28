export const DEFAULT_PRICE: number = 43460000;

export const GUIDE_MAX_STEP: number = 3;

export const GUIDE_MAX_TAG_NUM: number = 3;

export const PACKAGE_START_INDEX = 6;
export const PACKAGE_END_INDEX = 9;

export const optionKeyArr = [
  'powertrain',
  'wd',
  'body',
  'exteriorColor',
  'interiorColor',
  'wheel',
  'system',
  'temperature',
  'externalDevice',
  'internalDevice',
];

export const categoryNameList = [
  {
    key: 'powertrain',
    text: '파워트레인',
  },
  {
    key: 'wd',
    text: '구동 방식',
  },
  {
    key: 'body',
    text: '바디 타입',
  },
  {
    key: 'exterior_color',
    text: '외장 색상',
  },
  {
    key: 'interior_color',
    text: '내장 색상',
  },
  {
    key: 'wheel',
    text: '휠 선택',
  },
];

export const optionPackageList = [
  {
    idx: 0,
    key: 'system',
    text: '시스템',
  },
  {
    idx: 1,
    key: 'temperature',
    text: '온도관리',
  },
  {
    idx: 2,
    key: 'external_device',
    text: '외부장치',
  },
  {
    idx: 3,
    key: 'internal_device',
    text: '내부장치',
  },
];

// route
export const SELF_MODE_URL = '/self-mode';
export const GUIDE_MODE_URL = '/guide-mode';
export const COMPLETE_URL = '/complete';

// button text
export const CANCEL_TEXT = '안할래요';
export const CHANGE_TEXT = '변경할래요!';

export const POWERTRAIN_URI = `${import.meta.env.VITE_API_URL}/selective_option/required_option/powertrain`;
