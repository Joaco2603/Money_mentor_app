import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  SettingsScreen,
  CourseScreen,
  Evaluations,
} from "../screens";
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
          shadowOpacity: 0,
          shadowRadius: 0,
          backgroundColor: "#ecdff0",
          overflow: "hidden",
        },
        tabBarActiveTintColor: "#bc97c8",
        tabBarInactiveTintColor: "#83228A",
        // tabBarShowLabel: false,
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
        name="Courses"
        options={{
          title: "Course",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={23} name="book" color={color} />
          ),
        }}
        component={CourseScreen}
      />
      <Tab.Screen
        name="Evaluations"
        options={{
          title: "Evaluations",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="fa" color={color} />
          ),
        }}
        component={Evaluations}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-o" color={color} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
