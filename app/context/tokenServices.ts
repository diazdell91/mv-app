import * as SecureStore from 'expo-secure-store';
import { User } from './auth/authContext';

const tokenService = {
  saveUser: async (user: User) => {
    await SecureStore.setItemAsync('user', JSON.stringify(user));
  },
  getUser: async () => {
    const user = await SecureStore.getItemAsync('user');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return user;
  },
  deleteUser: async () => {
    await SecureStore.deleteItemAsync('user');
  },
  isVailable: async () => {
    const user = await SecureStore.getItemAsync('user');
    return user !== null;
  },
};

export default tokenService;
