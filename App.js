import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TaskScreen, Task } from "./Components/Tasks";
import { ModuleStack } from "./Components/Modules";
import AddModule from "./Components/AddModule";
import { ColorProvider } from "react-native-color-picker";
import { ModuleProvider } from "./Components/Context";
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Tasks") {
            iconName = focused
              ? "ios-checkmark-circle"
              : "ios-checkmark-circle-outline";
          } else if (route.name === "Module") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              screenOptions={{}}
            />
          );
        },
        tabBarActiveTintColor: "#ff69b4",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Tasks" component={TaskScreen} />
      <Tab.Screen name="Module" component={ModuleStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ModuleProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ModuleProvider>
  );
}
