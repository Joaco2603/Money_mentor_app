import { User } from "./interface/user";
import { createContext, useContext, useState } from "react";

interface valuesContext {
  user: User | undefined;
  login: () => void;
  signUp: () => void;
}

export const UserContext = createContext<undefined | valuesContext>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(undefined);

  const login = () => {
    setUser(undefined);
  };

  const signUp = () => {
    setUser(undefined);
  };

  return (
    <UserContext.Provider value={{ user, login, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "authDateContext must be used within a AuthContextProvider"
    );
  }
  return context;
};
