import { colors } from './colors';

export const border = {
  widthValue: 1,
  width: {
    sm: '1px',
    md: '2px',
    lg: '4px',
    values: {
      sm: 1,
      md: 2,
      lg: 4,
    },
  },
  style: 'solid',
  color: colors.semantic.border.primary,
  default: `1px solid ${colors.semantic.border.primary}`,
  radius: {
    xs: '1px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px',
    xl2: '16px',
    rounded: '50%',
    values: {
      xs: 4,
      sm: 2,
      md: 4,
      lg: 8,
      xl: 12,
      xl2: 16,
    },
  },
};
