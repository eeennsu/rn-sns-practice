import { getFontFamily } from '@src/shared/libs/font';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 24,
  },
});

