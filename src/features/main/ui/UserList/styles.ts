import { getFontFamily } from '@src/shared/libs/font';
import { StyleSheet } from 'react-native';

export const userStoryStyle = StyleSheet.create({
  userItemWrapper: {
    gap: 8,
    alignContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 80,
  },
  imageOnline: {
    outlineColor: '#9e6ae2ff',
  },
  imageOffline: {
    outlineColor: '#555155ff',
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 100,
    objectFit: 'cover',
    outlineOffset: 3,
    outlineWidth: 2,
  },
  userName: {
    fontSize: 12,
    fontFamily: getFontFamily('Inter', '400'),
    color: '#022150',
  },
});

export const loadingStyle = StyleSheet.create({
  wrapper: {
    width: userStoryStyle.userItemWrapper.width,
    height: userStoryStyle.userItemWrapper.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
