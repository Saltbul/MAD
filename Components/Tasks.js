import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import AddTask from "./AddTask";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.taskWrapper}>
          <View style={{ marginTop: "20%" }}>
            <View>
              <Task text={"Assignment 1"} label="MAD" textUnder="12/2/2024" />
              <Task text={"task 2"} label="Java" textUnder="24/6/2023" />
              <Task text={"CA 3"} label="DEUI" textUnder="04/2/2023" />
              <Task text={"CA 3"} label="DEUI" textUnder="04/2/2023" />
              <Task text={"CA 3"} label="DEUI" textUnder="04/2/2023" />
            </View>
          </View>
        </View>
      </ScrollView>
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
          <Text style={{ marginRight: 15, color: colors[index] }}>
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
  item: {
    backgroundColor: "#e8e8e8",
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 90,
    width: "90%",
    shadowColor: "2e2e2e",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemCenter: {
    alignItems: "center",
    justifyContent: "Center",
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
