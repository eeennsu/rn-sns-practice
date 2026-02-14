import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import MainTitle from '@features/user/ui/MainTitle';
import PostList from '@features/post/ui/PostList/PostList';
import UserStoryList from '@features/user/ui/UserStoryList/UserStoryList';

import useTypedNavigation from '@hooks/useTypedNavigation';
import { headerStyle } from '@styles/global';

const HomeScreen: FC = () => {
  const navigation = useTypedNavigation();

  const onProfileScreen = () => {
    navigation.navigateByUrl('Profile');
  };

  return (
    <>
      <View style={headerStyle.wrapper}>
        <MainTitle title="Let's Explore" />
        <TouchableOpacity
          style={headerStyle.messageIcon}
          onPress={onProfileScreen}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE" />
          <View style={headerStyle.messageCountContainer}>
            <View style={headerStyle.messageCountWrapper}>
              <Text style={headerStyle.messageCount}>3</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <UserStoryList />
      <PostList />
    </>
  );
};

export default memo(HomeScreen);
