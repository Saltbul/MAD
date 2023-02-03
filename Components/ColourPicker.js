// import React, { useContext } from "react";
// import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
// import ColorPicker from "react-native-color-picker";
// import { ModuleContext } from "./Context";

// export const ColorPick = () => {
//   const { colorModalVisible, setColorModalVisible } = useContext(ModuleContext);

//   return (
//     <View>
//       <TouchableOpacity onPress={() => setColorModalVisible(true)}>
//         <Text>Tap to choose</Text>
//       </TouchableOpacity>
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={colorModalVisible}
//         onRequestClose={() => setColorModalVisible(false)}
//       >
//         <View style={{ padding: 45 }}>
//           <ColorPicker
//             oldColor="purple"
//             onColorSelected={(color) => alert(`Color selected: ${color}`)}
//             style={{ flex: 1 }}
//           />
//           <TouchableOpacity onPress={() => setColorModalVisible(false)}>
//             <Text>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalText: {
//     marginTop: 4,
//     textAlign: "left",
//     fontSize: 20,
//   },
// });

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
          backgroundColor: color,
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
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              borderRadius: 50,
              marginBottom: 20,
            }}
            onPress={() => setColor("red")}
          />
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "blue",
              borderRadius: 50,
              marginBottom: 20,
            }}
            onPress={() => setColor("blue")}
          />
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "green",
              borderRadius: 50,
              marginBottom: 20,
            }}
            onPress={() => setColor("green")}
          />
          <TouchableOpacity onPress={() => setColorModalVisible(false)}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ColorPicker;
