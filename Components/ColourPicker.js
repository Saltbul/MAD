import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import ColorPicker from "react-native-color-picker";

const ColorPick = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Color Picker</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View>
          <ColorPicker
            onColorSelected={(color) => setSelectedColor(color)}
            style={{ flex: 1 }}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{ margin: 20 }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ColorPick;
