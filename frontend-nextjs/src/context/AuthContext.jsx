'use client';
import {AuthActionMe} from '@/src/actions/AuthAction';
import {createContext, useEffect} from 'react';
import {useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const checkUserLogin = async () => {
      const data = await AuthActionMe();
      if (data?.error) {
        setUser(null);
      } else {
        setUser(data.user);
      }
    };
    checkUserLogin();
  }, []);

  //   is a function that updates the user status
  const loginContext = (user) => {
    setUser(user);
    // console.log(user, 'AuthContext');
  };
  return <AuthContext.Provider value={{user, loginContext}}>{children}</AuthContext.Provider>;
};
