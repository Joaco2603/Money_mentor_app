import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "../screens";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTitle: "",
        headerStyle: {
          elevation: 0,
          borderColor: "transparent",
          shadowColor: "transparent",
          backgroundColor: "white",
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: "#9735B5",
          borderRadius: 100,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#c2a1ca",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Course"
        options={{
          title: "Course",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="book" color={color} />
          ),
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="Evaluations"
        options={{
          title: "Evaluations",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="fa" color={color} />
          ),
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-o" color={color} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
