import { createContext, useState, useEffect } from "react";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "./interface/user";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../routes/StackNavigator";

interface ValuesContext {
  user: User | undefined;
  login: (data: User | undefined) => void;
  signUp: (data: User | undefined) => void;
  logout: () => void;
}

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

export const UserContext = createContext<undefined | ValuesContext>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    storage
      .load({ key: "loginState" })
      .then((data) => {
        if (data && data.user) {
          setUser(data.user);
          navigation.navigate("Home");
        }
      })
      .catch((err) => {});
  }, []);

  const login = (data: User | undefined) => {
    setUser(data);
    storage.save({
      key: "loginState",
      data: {
        user: data,
      },
    });
    navigation.navigate("Home");
  };

  const signUp = (data: User | undefined) => {
    setUser(data);
    storage.save({
      key: "loginState",
      data: {
        user: data,
      },
    });
    navigation.navigate("Home");
  };

  const logout = () => {
    setUser(undefined);
    storage.remove({ key: "loginState" });
    navigation.navigate("Start");
  };

  return (
    <UserContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </UserContext.Provider>
  );
};
