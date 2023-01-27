import React from "react";
import {
  TouchableOpacity,
  Button,
  Pressable,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddModule from "./AddModule";
import AddTask from "./AddTask";
import RoundedRectangles from "./ModuleTasks";
import CTask from "./completedTask";

export function Modules({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.taskWrapper}>
          <View
            style={{ alignItems: "center", justifyContent: "center", top: 50 }}
          >
            <TouchableOpacity
              style={styles.box}
              onPress={() => navigate("CompletedTasks")}
              activeOpacity={0.6}
            >
              <Text style={{ fontSize: 23, color: "#32CD32" }}>Completed</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.box, { backgroundColor: "#FFDA15" }]}
              onPress={() => navigate("JPRGtasks")}
              activeOpacity={0.6}
            >
              <Text style={styles.moduleName}>JPRG</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.box, { backgroundColor: "#A1CDFF" }]}
              onPress={() => navigate("MADtasks")}
              activeOpacity={0.6}
            >
              <Text style={styles.moduleName}>MAD</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.box, { backgroundColor: "#B878EB" }]}
              onPress={() => navigate("DEUItasks")}
              activeOpacity={0.6}
            >
              <Text style={styles.moduleName}>DEUI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

function JPRGtasks() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RoundedRectangles
            rectangles={[
              { text: "Practical 1", radius: 25, width: "90%" },
              { text: "Practical 2", radius: 25, width: "90%" },
              { text: "Practical 3", radius: 25, width: "90%" },
              { text: "Practical 4", radius: 25, width: "90%" },
            ]}
          />
        </View>
      </ScrollView>
      <AddTask />
    </View>
  );
}

function MADtasks() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RoundedRectangles
            rectangles={[
              { text: "Practical 1", radius: 25, width: "90%" },
              { text: "Practical 2", radius: 25, width: "90%" },
              { text: "Practical 3", radius: 25, width: "90%" },
              { text: "Practical 4", radius: 25, width: "90%" },
            ]}
          />
        </View>
      </ScrollView>
      <AddTask />
    </View>
  );
}
function DEUItasks() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RoundedRectangles
            rectangles={[
              { text: "Practical 1", radius: 25, width: "90%" },
              { text: "Practical 2", radius: 25, width: "90%" },
              { text: "Practical 3", radius: 25, width: "90%" },
              { text: "Practical 4", radius: 25, width: "90%" },
            ]}
          />
        </View>
      </ScrollView>
      <AddTask />
    </View>
  );
}

const Stack = createStackNavigator();
export const ModuleStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Modules" component={Modules} />
      {/* all other screens located inside the stack of the tab Home */}
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
        name="JPRGtasks"
        component={JPRGtasks}
        options={{
          title: "JPRG Tasks",
          headerStyle: {
            backgroundColor: "#FFDA15",
          },
        }}
      />

      <Stack.Screen
        name="MADtasks"
        component={MADtasks}
        options={{
          title: "MAD Tasks",
          headerStyle: {
            backgroundColor: "#A1CDFF",
          },
        }}
      />

      <Stack.Screen
        name="DEUItasks"
        component={DEUItasks}
        options={{
          title: "DEUI Tasks",
          headerStyle: {
            backgroundColor: "#B878EB",
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
    width: "90%",
    height: "25%",
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  moduleName: {
    fontSize: 25,
  },
  item: {
    backgroundColor: "#e8e8e8",
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 80,
    shadowColor: "2e2e2e",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  //   taskWrapper: {
  //     paddingTop: 80,
  //     paddingHorizontal: 20,
  //     backgroundColor: "#fffdfa",
  //     flex: 1,
  //   },
  header: {
    backgroundColor: "yellow",
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

  // lineBreak: {
  //     width: '100%',
  //     height: 1.5,
  //     backgroundColor: 'gray',
  //     alignSelf: 'center',
  //     marginBottom: 15
  // },
});
