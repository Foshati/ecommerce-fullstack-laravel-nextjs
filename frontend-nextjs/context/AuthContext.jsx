'use client';
import {createContext} from 'react';
import {useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  //   is a function that updates the user status
  const loginContext = (user) => {
    setUser(user);
    // console.log(user, 'AuthContext');
  };
  return <AuthContext.Provider value={{user, loginContext}}>{children}</AuthContext.Provider>;
};
