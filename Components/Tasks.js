import React, { useContext, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import AddTask from "./AddTask";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { ModuleContext } from "./Context";

function TaskBox() {
  const {
    modalVisible,
    setModalVisible,
    title,
    setTitle,
    description,
    setDescription,
    task,
    setTask,
    taskItem,
    setTaskItem,
  } = useContext(ModuleContext);
  return (
    // <FlatList
    //   data={taskItem}
    //   renderItem={({ item }) => (
    //     <TouchableOpacity
    //       style={[styles.box]}
    //       onPress={() => <CompleteTask />}
    //       activeOpacity={0.6}
    //     >

    //       <Task text={item.title} label="bed" />
    //       <View

    //         style={{
    //           ...styles.circular,
    //           backgroundColor: "red",
    //           left: "100%",
    //         }}
    //       ></View>
    //     </TouchableOpacity>
    //   )}
    // />
    <FlatList
      data={taskItem}
      renderItem={({ item, index }) => (
        <TouchableOpacity style={[styles.box]} activeOpacity={0.6}>
          <Task text={item.title} onPress={() => completeTask(index)} />
          <View style={{ ...styles.circular, backgroundColor: "red" }} />
        </TouchableOpacity>
      )}
    />
  );
}

const completeTask = (index) => {
  const { taskItem, setTaskItem } = useContext(ModuleContext);
  let itemsCopy = [...taskItem];
  itemsCopy.splice(index, 1);
  setTaskItem(itemsCopy);
};

export function TaskScreen() {
  const { title, setTitle, description, setDescription, task, setTask } =
    useContext(ModuleContext);

  return (
    <View style={styles.container}>
      <View style={[styles.taskWrapper, styles.itemCenter]}>
        <View style={{ marginTop: "20%" }}>
          <TaskBox text />
        </View>
      </View>
      <View style={styles.addTaskWrapper}>
        <AddTask />
      </View>
    </View>
  );
}

const colors = ["#FE8686", "#7AAFFF", "#B080FF"];

export const Task = (props) => {
  const index = +props.text[props.text.length - 1] - 1;
  return (
    <View style={styles.itemCenter}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{props.text}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 0, color: colors[index] }}>
            {props.label}
          </Text>
          <View
            style={{ ...styles.circular, backgroundColor: colors[index] }}
          ></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 380,
    height: 80,
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    flexDirection: "row",
    padding: 15,
  },
  itemCenter: {
    alignItems: "center",
    justifyContent: "center",
  },

  circular: {
    width: 20,
    height: 20,
    //backgroundColor: "#766680",
    borderRadius: 10,
  },

  taskWrapper: {
    marginBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fffdfa",
    position: "relative", // added this
  },
  addTaskWrapper: {
    position: "absolute",
    bottom: 80,
    right: 80,
  },
});

export default Task;
