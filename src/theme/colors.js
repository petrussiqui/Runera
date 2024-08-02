import { alpha } from '@mui/material/styles';
const grey = {
  25: '#F9FAFB',
  50: '#F6F7F8',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#292934',
  900: '#111827'
};
export const primary = {
  25: '#F7F5FE',
  50: '#F4F1FE',
  100: '#E4DCFD',
  200: '#C8BAFC',
  300: '#A996F8',
  400: '#907AF1',
  500: '#6950E8',
  600: '#4fa5e2',
  700: '#4317CA',
  800: '#33129C',
  900: '#F4BB44',
  main: '#FCE593'
};
export const success = {
  25: '#F1FEF5',
  50: '#E3FDEB',
  100: '#CDFBDB',
  200: '#9DF7C2',
  300: '#6AE9AA',
  400: '#43D49A',
  500: '#11b886',
  600: '#0C9E80',
  700: '#088477',
  800: '#056A6A',
  900: '#035058',
  main: '#87FC74'
};
export const warning = {
  25: '#FFFCF5',
  50: '#FFF8E',
  100: '#FFF8E6',
  200: '#FFEBB3',
  300: '#FEDE80',
  400: '#FED14D',
  500: '#FEBF06',
  600: '#DB7E24',
  700: '#B75F19',
  800: '#93440F',
  900: '#7A3109',
  main: '#FDA801'
};
export const error = {
  25: '#FEF6F8',
  50: '#FEF1F4',
  100: '#FDE8ED',
  200: '#FBD5DE',
  300: '#F7A6BA',
  400: '#F37795',
  500: '#EF4770',
  600: '#EB194C',
  700: '#C0113C',
  800: '#910D2D',
  900: '#63091F',
  main: '#EF4770'
};
export const secondary = {
  ...grey,
  main: '#D875FB'
};
export const info = {
  light: '#F4F4FF',
  main: '#1CADFF',
  dark: '#0C53B7'
};

// FOR LIGHT THEME ACTION COLORS
export const textLight = {
  primary: grey[900],
  disabled: grey[200],
  secondary: grey[500]
};

// FOR DARK THEME TEXT COLORS
export const textDark = {
  primary: '#ffffff',
  disabled: '#484C5E',
  secondary: '#C2C2C2'
};

// FOR LIGHT THEME ACTION COLORS
export const actionLight = {
  focusOpacity: 0.12,
  hoverOpacity: 0.04,
  selected: grey[50],
  disabled: grey[200],
  disabledOpacity: 0.38,
  selectedOpacity: 0.08,
  activatedOpacity: 0.12,
  focus: alpha(grey[900], 0.12),
  hover: alpha(grey[900], 0.04),
  active: alpha(grey[900], 0.54),
  disabledBackground: alpha(grey[900], 0.12)
};

// FOR DARK THEME ACTION COLORS
export const actionDark = {
  focusOpacity: 0.12,
  hoverOpacity: 0.04,
  selected: grey[700],
  disabledOpacity: 0.38,
  selectedOpacity: 0.16,
  activatedOpacity: 0.24,
  // disabled: grey[200],
  focus: alpha(grey[100], 0.12),
  hover: alpha(grey[100], 0.04),
  active: alpha(grey[100], 0.54),
  disabledBackground: alpha(grey[100], 0.12)
};
const linear = {
  primary: 'linear-gradient(90deg, #6C69FF 0%, #699DEC 100%)',
  secondary: 'linear-gradient(180deg, #6C69FF 0%, #699DEC 100%)'
}
// COMMON COLOR PALETTE
const palette = {
  grey,
  info,
  error,
  primary,
  success,
  warning,
  secondary,
  linear
};

// LIGHT THEME COLOR PALETTE
export const lightPalette = {
  ...palette,
  mode: 'light',
  text: textLight,
  divider: grey[200],
  action: actionLight,
  background: {
    default: '#EEEDF4',
    paper: '#FFFFFF',
    input: "#FFFFFF",
    card: '#222234'
  }
};

// DARK THEME COLOR PALETTE
export const darkPalette = {
  ...palette,
  mode: 'dark',
  text: textDark,
  divider: '#242424',
  action: actionDark,
  background: {
    default: "#1B1B1B",
    paper: '#111111',
    input: "#000000",
    card: '#2B2B2B'
  }
};