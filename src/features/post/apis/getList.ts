import axios from 'axios';
import dayjs from 'dayjs';

import { IPost } from '@entities/post/types';
import { UserStatus } from '@entities/user/types';

import { IPageParams } from '@typings/common';
import { UtilImageCache } from '@utils/util_image';

interface IParams extends IPageParams {}

async function apiGetPosts({ page, pageSize }: IParams): Promise<IPost[]> {
  const skip = (+page - 1) * +pageSize;
  const [postResponse, userResponse] = await Promise.all([
    axios.get(`https://dummyjson.com/posts?limit=${pageSize}&skip=${skip}`),
    axios.get(`https://dummyjson.com/users?limit=100`),
  ]);

  const posts = postResponse.data.posts;
  const users = userResponse.data.users;

  return filterPostListResponse(posts, users);
}

export default apiGetPosts;

function filterPostListResponse(posts: any[], users: any[]): IPost[] {
  const mappedPosts = posts.map((post: any) => {
    const authorData = users.find((u: any) => u.id === post.userId) || users[0];

    const randomDaysAgo = Math.floor(Math.random() * 30);
    const randomHoursAgo = Math.floor(Math.random() * 24);
    const createdAt = dayjs()
      .subtract(randomDaysAgo, 'day')
      .subtract(randomHoursAgo, 'hour')
      .toISOString();

    return {
      id: String(post.id),
      author: {
        id: String(authorData.id),
        name: `${authorData.firstName} ${authorData.lastName}`,
        image: authorData.image,
        status: (Math.random() > 0.75 ? 'online' : 'offline') as UserStatus,
        location: authorData.address?.city || 'Unknown',
      },
      image: `https://picsum.photos/seed/${post.id}/600/400`,
      description: post.body,
      likeCount: post.reactions?.likes || 0,
      commentCount: Math.floor(Math.random() * 50),
      sharedCount: Math.floor(Math.random() * 10),
      createdAt,
      title: post.title,
    };
  });

  // 3개 아이탬의 이미지만 preload
  UtilImageCache.preloadImages(
    mappedPosts
      .slice(0, 3)
      .filter(post => !!post.image)
      .map(post => post.image),
  );

  return mappedPosts.sort((a, b) =>
    dayjs(b.createdAt).isAfter(dayjs(a.createdAt)) ? 1 : -1,
  );
}
