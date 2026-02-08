import { FC, memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { IPost } from '@entities/post/types';

import {
  faComment,
  faEllipsis,
  faHeart,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { postItemStyle } from './styles';

interface IProps {
  post: IPost;
}

const PostItem: FC<IProps> = ({ post }) => {
  return (
    <View style={postItemStyle.wrapper}>
      <View style={postItemStyle.header}>
        <View style={postItemStyle.author}>
          <Image
            source={{ uri: post.author.image }}
            style={postItemStyle.authorImage}
          />

          <View style={postItemStyle.authorInfo}>
            <Text>{post.author.name}</Text>
            <Text style={postItemStyle.authorLocation}>
              {post.author.location}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={postItemStyle.moreButton}>
          <FontAwesomeIcon icon={faEllipsis} color="#898DAE" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={postItemStyle.imageWrapper}>
        <Image source={{ uri: post.image }} style={postItemStyle.image} />
      </TouchableOpacity>
      <View style={postItemStyle.actions}>
        <TouchableOpacity style={postItemStyle.actionButton}>
          <FontAwesomeIcon size={13} icon={faHeart} color="#cbcdd9ff" />
          <Text style={postItemStyle.actionText}>{post.likeCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={postItemStyle.actionButton}>
          <FontAwesomeIcon size={13} icon={faComment} color="#cbcdd9ff" />
          <Text style={postItemStyle.actionText}>{post.commentCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={postItemStyle.actionButton}>
          <FontAwesomeIcon size={13} icon={faShare} color="#cbcdd9ff" />
          <Text style={postItemStyle.actionText}>{post.sharedCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(PostItem);
