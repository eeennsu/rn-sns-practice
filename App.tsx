import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import MainTitle from '@features/user/ui/MainTitle';
import PostList from '@features/user/ui/PostList/PostList';
import UserStoryList from '@features/user/ui/UserStoryList/UserStoryList';

import utilQueryClient from '@utils/util_query_client';

import { globalStyle, headerStyle } from '@styles/global';

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
          <MainTitle title="Let's Explore" />
          <TouchableOpacity style={headerStyle.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#898DAE" />
            <View style={headerStyle.messageCountContainer}>
              <Text style={headerStyle.messageCount}>42</Text>
            </View>
          </TouchableOpacity>
        </View>
        <UserStoryList />
        <PostList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
