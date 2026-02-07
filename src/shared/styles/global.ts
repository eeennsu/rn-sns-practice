import { StyleSheet } from 'react-native';

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
  messageCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const userListStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 36,
    paddingTop: 20,
    paddingInline: 34,
  },
});
