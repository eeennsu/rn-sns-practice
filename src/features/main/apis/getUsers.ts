import { IUser } from '@entities/user/types';
import { IPageParams } from '@typings/common';
import axios from 'axios';

interface IParams extends IPageParams {}

async function apiGetUsers({ page, pageSize }: IParams): Promise<IUser[]> {
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=${pageSize}&seed=my-app`,
  );

  return filterUserListResponse(response.data);
}

export default apiGetUsers;

function filterUserListResponse(data: any): IUser[] {
  return data?.results.map((user: any) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    image: user.picture.thumbnail,
    status: user.login?.md5 && user.login?.uuid,
  }));
}
