// @flow
export type ThemeColorsData = {
  +cardBackground: string,
  +darkGray: string,
  +darkBlue: string,
  +green: string,
  +greyOutline: string,
  +headerTitleColor: string,
  +lightGrey: string,
  +primary: string,
  +primaryLight: string,
  +red: string,
  +tabBarColor: string,
  +textColor: string,
  +thumbTintColor: string,
  +transparent: string,
  +white: string,
  +black: string,
  +selectionColor: ?string,
};

export type DeviceInfoType = {
  +isEmulator: boolean,
};
export type HoldingData = {
  +amountOfCoin: string,
  +dateBuy: Date,
  +id: any,
  +name: string,
  +priceByCoin: string,
  +priceTotalPay: string,
  +cryptoId: any,
};