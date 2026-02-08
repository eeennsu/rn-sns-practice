import axios from 'axios';

import { IUser } from '@entities/user/types';

import { IPageParams } from '@typings/common';

interface IParams extends IPageParams {}

async function apiGetStoryList({ page, pageSize }: IParams): Promise<IUser[]> {
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=${pageSize}&seed=my-app`,
  );

  return filterUserStoryListResponse(response.data);
}

export default apiGetStoryList;

function filterUserStoryListResponse(data: any): IUser[] {
  return data?.results.map((user: any) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    image: user.picture.thumbnail,
    status: Math.random() > 0.5 ? 'online' : 'offline',
    location: `${user.location.city}, ${user.location.state}`,
  }));
}
