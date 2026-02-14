import { StyleSheet } from 'react-native';

import { getFontFamily } from '@src/shared/libs/font';

export const postListStyle = StyleSheet.create({
  wrapper: {},
});

export const loadingStyle = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
});

export const noMorePostStyle = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  text: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 20,
    color: '#999',
  },
});

export const postItemStyle = StyleSheet.create({
  wrapper: {
    paddingInline: 24,
    paddingBlock: 28,
    alignItems: 'center',
    gap: 12,
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  authorInfo: {
    gap: 2,
  },
  authorLocation: {
    color: '#999',
    fontSize: 10,
  },
  moreButton: {
    padding: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    width: '100%',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actionText: {
    color: '#cbcdd9ff',
  },
});
