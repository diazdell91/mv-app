import { Session } from './authContext';

interface Action {
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT';
  payload?: Session;
}

interface authState {
  isLoading: boolean;
  isAuthenticated: boolean;
  session?: Session;
}

function authReducer(state: authState, action: Action) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        session: action.payload,
      };
    case 'SIGN_IN':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        session: action.payload,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        session: undefined,
      };
    default:
      return {
        ...state,
      };
  }
}
export default authReducer;
