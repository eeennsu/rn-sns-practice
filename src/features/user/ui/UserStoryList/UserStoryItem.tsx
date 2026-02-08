import { memo, type FC } from 'react';
import { Image, Text, View } from 'react-native';

import { IUser } from '@entities/user/types';

import { userStoryStyle } from './styles';

interface IProps {
  user: IUser;
  isHiddenUserName?: boolean;
}

const UserStoryItem: FC<IProps> = ({ user, isHiddenUserName = false }) => {
  return (
    <View style={userStoryStyle.userItemWrapper}>
      <Image
        source={{ uri: user.image }}
        style={{
          ...userStoryStyle.image,
          ...(user.status === 'online'
            ? userStoryStyle.imageOnline
            : userStoryStyle.imageOffline),
        }}
      />
      {!isHiddenUserName && (
        <Text
          style={userStoryStyle.userName}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {user.name}
        </Text>
      )}
    </View>
  );
};

export default memo(UserStoryItem);
