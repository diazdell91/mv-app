import { User } from './authContext';

interface Action {
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT';
  payload?: User;
}

interface authState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user?: User;
}

function authReducer(state: authState, action: Action) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case 'SIGN_IN':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: undefined,
      };
    default:
      return {
        ...state,
      };
  }
}
export default authReducer;
