import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/bottom_tabs/Home';
import ProfileScreen from '@screens/bottom_tabs/Profile';
import SearchScreen from '@screens/bottom_tabs/Search';

import { RootStackParamList } from '@typings/navigation';
import { Platform } from 'react-native';

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Search: SearchScreen,
    Profile: ProfileScreen,
  },
  screenOptions: {
    headerShown: false,
    animation: Platform.OS === 'ios' ? 'ios_from_right' : 'simple_push',
  },
});

const RootStaticNavigation = createStaticNavigation(RootStack);

export default RootStaticNavigation;
