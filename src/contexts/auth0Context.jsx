import { createContext, useEffect, useReducer, useCallback } from 'react';
import { LoadingProgress } from 'components/loader';

const initialAuthState = {
  user: null,
  isInitialized: true,
  isAuthenticated: true
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      {
        const {
          isAuthenticated,
          user
        } = action.payload;
        return {
          ...state,
          isAuthenticated,
          isInitialized: true,
          user
        };
      }
    case 'LOGIN':
      {
        const {
          user
        } = action.payload;
        return {
          ...state,
          isAuthenticated: true,
          user
        };
      }
    case 'LOGOUT':
      {
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      }
    default:
      {
        return state;
      }
  }
};
export const AuthContext = createContext({});
export const AuthProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  // LOGIN HANDLE
  const loginWithPopup = useCallback(async options => {
    if (state?.isAuthenticated) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user: null
        }
      });
    }
  }, []);

  // LOGOUT HANDLE
  const logout = useCallback(options => {
    dispatch({
      type: 'LOGOUT'
    });
  }, []);

  if (!state.isInitialized) return <LoadingProgress />;

  return <AuthContext.Provider value={{
    ...state,
    method: 'AUTH0',
    loginWithPopup,
    logout
  }}>
    {children}
  </AuthContext.Provider>;
};