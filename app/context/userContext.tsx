import { createContext, useEffect, useState } from "react";
import { User } from "./interface/user";

interface valuesContext {
  user: User | undefined;
  login: (data: User | undefined) => void;
  signUp: (data: User | undefined) => void;
}

export const UserContext = createContext<undefined | valuesContext>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = (data: User | undefined) => {
    setUser(data);
  };

  const signUp = (data: User | undefined) => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ user, login, signUp }}>
      {children}
    </UserContext.Provider>
  );
};
