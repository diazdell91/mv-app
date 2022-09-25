/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import tokeService from '../context/sessionService';
const baseUrl = 'https://conexen-production.up.railway.app/api/';

type User = {
  _id: string;
  email: string;
  name: string;
  lastTask: string;
  disabled: boolean;
  roles: string[];
  createdAt: string;
  updatedAt: string;
};

type CreateUser = {
  email: string;
  name: string;
  password: string;
  roles: string[];
};

const createUser = async (user: CreateUser) => {
  const session = await tokeService.getSession();
  if (session) {
    const config = {
      headers: { Authorization: `Bearer ${session.token}` },
    };
    const { data } = await axios.post(`${baseUrl}CreateUser`, user, config);

    return data as User;
  } else {
    return null;
  }
};

const getStaff = async () => {
  const session = await tokeService.getSession();
  if (session) {
    const config = {
      headers: { Authorization: `Bearer ${session.token}` },
    };
    const { data } = await axios.get(`${baseUrl}GetStaff`, config);

    return data as {
      users: User[];
    };
  } else {
    return null;
  }
};

export default { getStaff, createUser };
