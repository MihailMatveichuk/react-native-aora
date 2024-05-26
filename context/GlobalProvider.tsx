import { getCurrentUser } from '@/lib/appwrite';
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  type Dispatch,
} from 'react';

export const GlobalContext = createContext({
  isLoggedIn: false,
  user: {},
  isLoading: true,
  // setIsLoggedIn: () => {},
  // setUser: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const handleCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setUser(user);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setisLoading(false);
      }
    };

    handleCurrentUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        // setIsLoggedIn,
        // setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
