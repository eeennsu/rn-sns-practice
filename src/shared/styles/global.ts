import { Platform, StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export const headerStyle = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    marginLeft: 27,
    marginRight: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
    position: 'relative',
  },
  messageCountContainer: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    flexDirection: 'row',
  },
  messageCountWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageCount: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const skeletonItemStyle = StyleSheet.create({
  item: {
    backgroundColor: '#f0f2f4ff',
    borderRadius: 20,
  },
});

export const testStyle = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: { backgroundColor: 'red' },
      android: { backgroundColor: 'blue' },
      default: { backgroundColor: 'green' }, // for other platforms like web
    }),
  },
});
