import { User } from 'firebase/auth';
import React, { useContext, createContext, useState } from 'react';
import { formData } from 'types';

type AuthContextProps = {
  signIn: (data: formData) => void
  logout: () => void
  signUp: (data: formData) => void
  updateUserInfo: (data: ProfileUpdate) => void
  loading: boolean
  user: User | null
  error: string
}

type ProfileUpdate = {
  name: string,
  photoURL: string
}


const MockAuthContext = createContext({} as AuthContextProps);

const MockAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signIn = async ({ email, password }: formData) => {
    
    // Implement your mock sign-in logic here
    // For example, set user or error state based on test case
  };

  const signUp = async ({ email, password }: formData) => {
    // Implement your mock sign-up logic here
    // For example, set user or error state based on test case
  };

  const logout = () => {
    // Implement your mock logout logic here
  };

  const updateUserInfo = () => {
    
  }

  return (
    <MockAuthContext.Provider
      value={{ user, loading, error, signIn, signUp, logout, updateUserInfo }}
    >
      {children}
    </MockAuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(MockAuthContext);
};

export { MockAuthProvider, useAuthContext };
