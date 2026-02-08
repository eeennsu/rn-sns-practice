import { StyleSheet } from 'react-native';

import { getFontFamily } from '@src/shared/libs/font';

export const userStoryListStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 36,
    paddingTop: 20,
    paddingInline: 40,
    paddingBottom: 56,
  },
});

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

export const noMoreUsersStyle = StyleSheet.create({
  wrapper: {
    width: userStoryStyle.userItemWrapper.width,
    height: userStoryStyle.userItemWrapper.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: getFontFamily('Inter', '400'),
    color: '#90949bff',
    textAlign: 'center',
  },
});

export const skeletonStyle = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: userStoryStyle.userItemWrapper.height,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
});
