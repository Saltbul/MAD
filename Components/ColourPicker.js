import React, { useContext } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { ModuleContext } from "./Context";

const ColorPicker = () => {
  const { color, setColor, colorModalVisible, setColorModalVisible } =
    useContext(ModuleContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#E8E8E8",
          borderRadius: 50,
        }}
        onPress={() => setColorModalVisible(true)}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={colorModalVisible}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={{ flexDirection: "row", margin: 20 }}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "red",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("red")}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "orange",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("orange")}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "gold",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("gold")}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "green",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("green")}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "dodgerblue",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("dodgerblue")}
            />
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "lightcoral",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("lightcoral")}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "lightgreen",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("lightgreen")}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "lightpink",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("lightpink")}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "paleturquoise",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("paleturquoise")}
            />
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "peachpuff",
                borderRadius: 50,
                margin: 5,
              }}
              onPress={() => setColor("peachpuff")}
            />
          </View>
          <TouchableOpacity onPress={() => setColorModalVisible(false)}>
            <Text style={{ fontSize: 25 }}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ColorPicker;
