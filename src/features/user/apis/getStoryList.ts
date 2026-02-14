import axios from 'axios';

import { IUser } from '@entities/user/types';

import { IPageParams } from '@typings/common';
import { UtilImageCache } from '@utils/util_image';

interface IParams extends IPageParams {}

async function apiGetStoryList({ page, pageSize }: IParams): Promise<IUser[]> {
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=${pageSize}&seed=my-app2`,
  );

  return filterUserStoryListResponse(response.data);
}

export default apiGetStoryList;

function filterUserStoryListResponse(data: any): IUser[] {
  UtilImageCache.preloadImages(
    data?.results
      .slice(0, 3)
      .filter((user: any) => !!user?.picture?.thumbnail)
      .map((user: any) => user?.picture?.thumbnail),
  );

  return data?.results.map((user: any) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    image: user.picture.thumbnail,
    status: Math.random() > 0.5 ? 'online' : 'offline',
    location: `${user.location.city}, ${user.location.state}`,
  }));
}
