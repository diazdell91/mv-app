/*eslint @typescript-eslint/no-unsafe-assignment:*/
export const FONTS = {
  'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
  'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
  'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
};

export type FontType = keyof typeof FONTS;
