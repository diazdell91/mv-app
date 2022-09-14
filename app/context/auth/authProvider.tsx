/*eslint @typescript-eslint/no-unsafe-assignment:*/
import { useContext, useEffect, useReducer } from 'react';
import reducer from './authReducer';
import { AuthContext, User } from './authContext';
import tokenService from '../tokenServices';

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  user: undefined,
};

function useAuthActions() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      // Getting session from localStorage
      const existingSession = await tokenService.isVailable();

      if (existingSession) {
        // We have data!!
        const user = await tokenService.getUser();
        console.log(user);
        if (user) {
          const userData = JSON.parse(user);
          dispatch({ type: 'RESTORE_TOKEN', payload: userData });
        } else {
          dispatch({ type: 'SIGN_OUT' });
        }
      } else {
        dispatch({ type: 'SIGN_OUT' });
      }
    };
    bootstrapAsync().catch((err) => console.log(err));
  }, []);

  const login = (user: User) => {
    dispatch({
      type: 'SIGN_IN',
      payload: user,
    });
  };
  function signOut() {
    console.log('signOut');
    dispatch({ type: 'SIGN_OUT' });
  }

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
        user: state?.user,
        login,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
