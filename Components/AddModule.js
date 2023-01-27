import React, { useState } from "react";
import {
  TextInput,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ColorPick from "./ColourPicker";

const AddModule = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitleText}>Add Module</Text>

            <View style={{ alignItems: "left" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modalText}>Module Name : </Text>
                <TextInput style={styles.modalInput} />
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modalText}>Number of Credits : </Text>
                <TextInput
                  style={styles.modalNumberInput}
                  //numeric value   // prop makes the input to get numeric only
                  keyboardType={"numeric"} // prop to open numeric keyboard
                />
              </View>

              <View
                style={{
                  flexDirection: "column",
                  marginTop: "5%",
                  alignItems: "left",
                }}
              >
                <Text style={styles.modalText}>Colour : </Text>
                {/* <MyColorPicker/> */}
                <ColorPick />
                {/* <View style={{ flexDirection: "row", alignItems: "center", marginStart : "5%" }} >
                                    <View style={{ width: 50, height: 50, backgroundColor: '#FFDA15', borderRadius: 25, margin: "2%" }} />
                                    <View style={{ width: 50, height: 50, backgroundColor: '#A1CDFF', borderRadius: 25, margin: "2%", borderColor: "gray", borderWidth: 2 }} />
                                    <View style={{ width: 50, height: 50, backgroundColor: '#B878EB', borderRadius: 25, margin: "2%" }} />
                                    <View style={{ width: 50, height: 50, backgroundColor: '#B7DCB7', borderRadius: 25, margin: "2%" }} />
                                    <View style={{ width: 50, height: 50, backgroundColor: '#FFB6B6', borderRadius: 25, margin: "2%" }} />
                                </View> */}
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: "10%" }}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttonClose1}>Cancel</Text>
              </Pressable>
              <View style={[styles.space]} />
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttonClose2}>Done</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.plusButton, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome5 name={"plus"} size={22} color={"black"} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  modalTitleText: {
    marginBottom: 25,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 2,
    fontSize: 23,
  },
  modalText: {
    marginTop: 4,
    textAlign: "center",
    fontSize: 20,
  },
  modalInput: {
    marginStart: "2%",
    width: "60%",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontSize: 20,
    textAlign: "center",
  },
  modalNumberInput: {
    marginStart: "2%",
    width: "20%",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddModule;
