import { raw } from './rawValue';
import { scale } from './scale';

const semantic = {
  text: {
    primary: scale.neutral.s800,
    secondary: scale.neutral.s600,
    tertiary: scale.neutral.s500,
    tertiaryInfo: scale.neutral.s400,
    info: scale.info.s600,
    infoBold: scale.info.s800,
    warning: scale.warning.s600,
    warningBold: scale.warning.s800,
    success: scale.success.s600,
    successBold: scale.success.s800,
    danger: scale.danger.s600,
    dangerBold: scale.danger.s800,
    disabled: scale.neutral.s400,
  },
  bg: {
    primary: scale.base.white,
    primaryBlur: scale.transparent.white80,
    secondary: scale.neutral.s100,
    tertiary: scale.neutral.s50,
    brand: scale.primary.s600,
    subBrand: scale.accent.s300,
    infoSubtle: scale.info.s50, 
    infoBold: scale.info.s700,
    warningSubtle: scale.warning.s50,
    warningBold: scale.warning.s500,
    successSubtle: scale.success.s50,
    successBold: scale.success.s700,
    dangerSubtle: scale.danger.s50,
    dangerBold: scale.danger.s700,
    inverseSubtle: scale.danger.s50,
    inverseBold: scale.danger.s700,
    disabled: scale.neutral.s300,
  },
  icon: {
    primary: scale.neutral.s900,
    secondary: scale.neutral.s700,
    tertiary: scale.neutral.s400,
    checked: scale.primary.s600,
    unchecked: scale.neutral.s300,
    info: scale.info.s600,
    starInfo: raw.yellow.r300, // 별점 아이콘
    warning: scale.warning.s700,
    success: scale.success.s700,
    danger: scale.danger.s700,
    disabled: scale.neutral.s400,
  },
  border: {
    primary: scale.neutral.s400,
    secondary: scale.neutral.s200,
    focus: scale.primary.s600, // focusRing
    infoSubtle: scale.info.s50,
    info: scale.info.s600,
    warningSubtle: scale.warning.s50,
    warning: scale.warning.s600,
    successSubtle: scale.success.s50,
    success: scale.success.s600,
    dangerSubtle: scale.danger.s50,
    danger: scale.danger.s600,
    disabled: scale.neutral.s400,
  },
  shadow: {
    core: scale.transparent.black12, // 그림자에서 가장 어두운 색
    cast: scale.transparent.black16, // 그림자에서 가장 옅은 색
  },
  logo: {
    naver: '#03C75A',
  },
};

export { semantic };
