/*eslint @typescript-eslint/no-unsafe-assignment:*/
import { useContext, useEffect, useReducer } from 'react';
import reducer from './authReducer';
import { AuthContext, Session } from './authContext';
import sessionService from '../sessionService';
import client from '../../apollo/client';

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  session: {
    user: undefined,
    tokens: undefined,
  },
};

function useAuthActions() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      // Getting session from localStorage
      const existingSession = await sessionService.isAvailable();

      if (existingSession) {
        // We have data!!
        try {
          const session = await sessionService.getSession();
          //const sessionData = JSON.parse(session);
          dispatch({ type: 'RESTORE_TOKEN', payload: session });
        } catch (error) {
          dispatch({ type: 'SIGN_OUT' });
        }
      } else {
        dispatch({ type: 'SIGN_OUT' });
      }
    };
    bootstrapAsync().catch((err) => console.log(err));
  }, []);

  const login = async (session: Session) => {
    await client.clearStore();
    try {
      await sessionService.saveSession(session);
      dispatch({
        type: 'SIGN_IN',
        payload: session,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = async () => {
    console.log('signOut');
    await client.clearStore();
    try {
      await sessionService.deleteSession();
      dispatch({ type: 'SIGN_OUT' });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    login,
    signOut,
  };
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { state, login, signOut } = useAuthActions();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state?.isAuthenticated,
        isLoading: state?.isLoading,
        user: state?.session?.user,
        session: state?.session,
        login,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
