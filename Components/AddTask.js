import React, { useContext } from "react";
import { useState } from "react";
import {
  TextInput,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DropDownPicker from "react-native-dropdown-picker";
import CalendarPicker from "react-native-calendar-picker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ModuleContext } from "./Context";
import { Calendar } from "react-native-calendars";
import { Dropdown } from "./dropdown";

// function DatePicker({ visible, onDateSelected }) {
//   return (
//     <Modal visible={visible} transparent={true} animationType="fade">
//       <View style={styles.overlay}>
//         <Calendar onDayPress={onDateSelected} />
//       </View>
//     </Modal>
//   );
// }

const AddTask = () => {
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
  const [Date, setDate] = useState(null);

  const handleTask = (title, description) => {
    var taskthing = {
      title: title,
      description: description,
    };

    setModalVisible(!modalVisible);
    if (title == "") {
    } else {
      setTaskItem([...taskItem, taskthing]);
    }
  };

  const handlePress = () => {
    setTitle("");
    setDescription("");
    setModalVisible(!modalVisible);
  };

  //Add modules later

  // const [items, setItems] = useState([
  //   { label: "BED", value: "bed" },
  //   { label: "JPRG", value: "jprg" },
  //   { label: "Task", value: "task" },
  // ]);

  // const onDateChange = (date) => {
  //   setDueDate(date);
  // };

  return (
    <View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}>Add Task</Text>
              <View>
                <TouchableWithoutFeedback
                  onPress={Keyboard.dismiss}
                  accessible={false}
                >
                  <View style={styles.alignCenter}>
                    <TextInput
                      style={styles.modalInput}
                      placeholder="Title"
                      placeholderTextColor={"#D3D3D3"}
                      textAlign="left"
                      onChangeText={(Text) => setTitle(Text)}
                    />
                  </View>
                </TouchableWithoutFeedback>

                {/* <DropDownPicker
                  placeholder="Select Module"
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholderStyle={{ color: "#D3D3D3" }}
                /> */}

                {/* <Dropdown /> */}

                <View>
                  <View>
                    <Text style={{ marginTop: "20%", fontSize: "18" }}>
                      Description
                    </Text>
                    <TextInput
                      value={description}
                      style={styles.multiLineInput}
                      placeholderTextColor={"#D3D3D3"}
                      textAlign="left"
                      onChangeText={(text) => setDescription(text)}
                    />
                  </View>
                </View>
                {/* <View>
                  <SafeAreaView style={styles.container}>
                    <Button
                      title="Show Modal"
                      onPress={() => setModalVisible(!modalVisible)}
                    />
                    <DatePicker
                      visible={modalVisible}
                      onDateSelected={() => setModalVisible(false)}
                    />
                  </SafeAreaView>
                </View> */}
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: "10%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttonClose1}>Cancel</Text>
                  </Pressable>
                  <View style={[styles.space]} />

                  <Pressable onPress={() => handleTask(title, description)}>
                    <Text style={styles.buttonClose2}>Save Task</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.plusButton, styles.buttonOpen]}
          onPress={() => handlePress()}
        >
          <FontAwesome5 name={"plus"} size={22} color={"black"} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alignCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  plusButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    elevation: 5,
  },
  button: {
    borderRadius: 20,
  },
  buttonOpen: {
    backgroundColor: "#ff69b4",
    shadowColor: "2e2e2e",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonClose1: {
    fontSize: 20,
    color: "#DF4552",
    fontWeight: "bold",
  },
  space: {
    width: "15%", // whatever size you need
  },
  buttonClose2: {
    fontSize: 20,
    color: "#32CD32",
    fontWeight: "bold",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleDone: {
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleCancel: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitleText: {
    marginBottom: 25,
    fontWeight: "bold",
    borderBottomWidth: 2,
    fontSize: 23,
  },
  modalText: {
    paddingTop: 18,
    paddingBottom: 18,
    textAlign: "left",
    placeholder: "Name of the module",
    fontSize: 20,
  },
  modalInput: {
    width: "90%",
    paddingLeft: 5,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontSize: 20,
    textAlign: "center",
  },
  multiLineInput: {
    width: "100%",
    height: 80,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e8e8e8",
    backgroundColor: "#e8e8e8",
    fontSize: 15,
    textAlign: "center",
    paddingLeft: 5,
    alignItems: "flexStart",
  },
  modalNumberInput: {
    width: 30,
    marginBottom: 0,
    borderBottomColor: "gray",
    fontSize: 15,
    textAlign: "left",
  },
  leftAllign: {
    alignItems: "flex-start",
  },
  rightAllign: {
    alignItems: "flex-end",
  },
  modalTitle: {
    marginTop: 2,
    textAlign: "left",
    placeholder: "Name of the module",
    fontSize: 23,
  },
  dropdownModule: {
    width: "10%",
  },
});

export default AddTask;
