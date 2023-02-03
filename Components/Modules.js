import React, { useContext } from "react";
import {
  TouchableOpacity,
  Pressable,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  FlatList,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AddTask from "./AddTask";
import AddModule from "./AddModule";
import RoundedRectangles from "./ModuleTasks";
import CTask from "./completedTask";
import { ModuleContext } from "./Context";

function ModulesBoxes({ navigation }) {
  const { moduleItems, setModuleItems } = useContext(ModuleContext);
  return (
    <View>
      <FlatList
        data={moduleItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.box, { backgroundColor: item.color || "#E8E8E8" }]}
            onPress={() => navigation.navigate("IndivTasks")}
          >
            <Text style={styles.moduleName}> {item.moduleName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export function Modules({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <View
          style={{ alignItems: "center", justifyContent: "center", top: 50 }}
        >
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("CompletedTasks")}
            activeOpacity={0.6}
          >
            <Text style={{ fontSize: 23, color: "#32CD32" }}>Completed</Text>
          </TouchableOpacity>

          <ModulesBoxes navigation={navigation} />
        </View>
      </View>
      <View style={styles.addTaskWrapper}>
        <AddModule />
      </View>
    </View>
  );
}

function CompletedTasks({ navigation, route }) {
  return (
    <View style={styles.taskWrapper}>
      <ScrollView>
        <View>
          {/*This is where the tasks will go*/}
          <CTask text={"Assignment 2"} label="JAVA" />
          <CTask text={"Task 1"} label="MAD" />
          <CTask text={"CA 3"} label="DEUI" />
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
}

function IndivTasks() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RoundedRectangles
            rectangles={[
              { text: "These", radius: 25, width: "90%" },
              { text: "tasks", radius: 25, width: "90%" },
              { text: "are", radius: 25, width: "90%" },
              { text: "hardcoded", radius: 25, width: "90%" },
            ]}
          />
        </View>
      </ScrollView>
      <View>
        <AddTask />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();
export const ModuleStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Modules" component={Modules} />
      <Stack.Screen
        name="CompletedTasks"
        component={CompletedTasks}
        options={{
          title: "Completed Tasks",
          headerStyle: {
            backgroundColor: "#32CD32",
          },
        }}
      />

      <Stack.Screen
        name="IndivTasks"
        component={IndivTasks}
        options={{
          title: "Tasks",
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  box: {
    width: 380,
    height: 80,
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  moduleName: {
    fontSize: 25,
  },
  moduleWrapper: {
    marginBottom: 0,
  },
  taskWrapper: {
    marginBottom: 0,
  },
  addTaskWrapper: {
    position: "absolute",
    bottom: 80,
    right: 80,
  },
});
