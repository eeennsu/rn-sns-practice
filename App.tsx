import {
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { globalStyle, headerStyle } from '@styles/global';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Title from './src/features/main/ui/Title';
import UserList from '@features/main/ui/UserList/UserList';
import axios from 'axios';
import { QueryClientProvider } from '@tanstack/react-query';
import utilQueryClient from '@utils/util_query_client';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const queryClient = utilQueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InApp />
    </QueryClientProvider>
  );
}

function InApp() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={globalStyle.safeArea}>
        <View style={headerStyle.wrapper}>
          <Title title="Let's Explore" />
          <TouchableOpacity style={headerStyle.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#898DAE" />
            <View style={headerStyle.messageCountContainer}>
              <Text style={headerStyle.messageCount}>42</Text>
            </View>
          </TouchableOpacity>
        </View>
        <UserList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
