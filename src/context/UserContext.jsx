
import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/auth.js';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies();

  const login = async (email, password) => {
    const res = await api.login(email, password);
    console.log(res)
    setCookies('token', res.access_token, {'secure': true, 'sameSite': 'strict'})

    navigate('/admin');
  };

  const validate = async (token) => {
    const res = await api.validate(token);
    
    if (res.ok){
      return true
    } else {
      logout();
      return false
    }
  }

  const logout = () => {
    ['token'].forEach(obj => removeCookie(obj));
    navigate('/login');
  };

  const value = useMemo(() => ({cookies, login, logout, validate}), [cookies]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(UserContext)
};