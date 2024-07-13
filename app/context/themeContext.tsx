import { User } from "./interface/user";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext<undefined | User>(undefined);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(undefined);

  return <ThemeContext.Provider value={user}>{children}</ThemeContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "authDateContext must be used within a AuthContextProvider"
    );
  }
  return context;
};
