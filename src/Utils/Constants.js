import { Platform } from 'react-native';

export const apiBaseURL = 'https://api.coinmarketcap.com';
export const colors = {
  red: '#F8333C',
  green: '#4ADF86',
  darkGray: '#31393C',
  greyOutline: '#bbbbbb',
  primary: '#00C0FF',
  primaryLight: 'rgba(0, 192, 255, 0.15)',
  lightGrey: '#B4B4B4',
  white: '#ffffff',
  transparent: 'transparent',
  darkBlue: '#161C36',
  black: '#000',
  selectionColor: Platform.OS === 'ios' ? '#00C0FF' : undefined
};