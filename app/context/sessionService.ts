import * as SecureStore from 'expo-secure-store';
import { Session } from './auth/authContext';

const sessionService = {
  saveSession: async (session: Session) => {
    await SecureStore.setItemAsync('session', JSON.stringify(session));
  },
  getSession: async () => {
    const session = await SecureStore.getItemAsync('session');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return session ? JSON.parse(session) : (null as Session);
  },
  deleteSession: async () => {
    await SecureStore.deleteItemAsync('session');
  },
  isAvailable: async () => {
    const session = await SecureStore.getItemAsync('session');
    return session !== null;
  },
};

export default sessionService;
