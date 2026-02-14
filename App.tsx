import { QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { StatusBar, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';

import utilQueryClient from '@utils/util_query_client';

import { globalStyle } from '@styles/global';
import RootStaticNavigation from '@navigators/Root';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const queryClient = utilQueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider>
          <PortalProvider>
            <InApp />
          </PortalProvider>
        </TamaguiProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

function InApp() {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={[
          globalStyle.safeArea,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <RootStaticNavigation />
      </View>
    </>
  );
}

export default App;
