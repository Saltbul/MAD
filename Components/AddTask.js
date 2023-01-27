import React, { useState } from "react";
import { TextInput, Modal, StyleSheet, Text, Pressable, View, Keyboard } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import TextInputMultiline from "./multilineBox";
import CalendarPicker from 'react-native-calendar-picker';

const AddTask = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'BED', value: 'bed' },
        { label: 'JPRG', value: 'jprg' },
        { label: 'Task', value: 'task' }
    ]);

    const [dueDate, setDueDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const onDateChange = (date) => {
        setDueDate(date);

    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitleText}>Add Task</Text>


                        <View>
                            <View style={{ flexDirection: "row", }}>
                                <Text style={styles.modalTitle}>Title: </Text>
                                <TextInput style={styles.modalInput}
                                />
                            </View>

                            <View style={{ flexDirection: "row", }}>
                                <Text style={styles.modalText}>Due Date: </Text>
                                <Pressable onPress={() => setShowCalendar(!showCalendar)}>
                                    <Text style={styles.modalText}>Choose</Text>
                                </Pressable>
                                {showCalendar && (
                                    <CalendarPicker
                                        onDateChange={onDateChange}
                                        selectedDayColor="#FDB813"
                                        selectedDayTextColor="#FFFFFF"
                                    />
                                )}
                                <TextInput style={styles.modalNumberInput} value={dueDate ? dueDate.toString() : ''} disabled={true} />
                            </View>


                            <DropDownPicker
                                placeholder="Select Module"
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                            <View>

                                <View >
                                    <Text style={{ marginTop: "8%" }}>description</Text>
                                    <TextInputMultiline />
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginTop: "10%" }}>
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.buttonClose1}>Cancel</Text>
                                </Pressable>
                                <View style={[styles.space]} />
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.buttonClose2}>Done</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal >
            <Pressable
                style={[styles.plusButton, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <FontAwesome5
                    name={'plus'}
                    size={22}
                    color={'black'}
                />
            </Pressable>
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    plusButton: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 350,
        right: 24,
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
        fontWeight: "bold"
    },
    space: {
        width: "15%", // whatever size you need
    },
    buttonClose2: {
        fontSize: 20,
        color: "#32CD32",
        fontWeight: "bold"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    textStyleDone: {
        color: "green",
        fontWeight: "bold",
        textAlign: "center"

    },
    textStyleCancel: {
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalTitleText: {
        marginBottom: 25,
        fontWeight: "bold",
        borderBottomWidth: 2,
        fontSize: 23
    },
    modalText: {
        paddingTop: 18,
        paddingBottom: 18,
        textAlign: 'left',
        placeholder: "Name of the module",
        fontSize: 20,
    },
    modalInput: {
        width: 130,
        marginBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 15,
        textAlign: "center"
    },
    modalNumberInput: {
        width: 50,
        marginBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 15,
        textAlign: "center"
    },
    leftAllign: {
        alignItems: "flex-start",
    },
    rightAllign: {
        alignItems: "flex-end",
    },
    modalTitle: {
        marginTop: 2,
        textAlign: 'left',
        placeholder: "Name of the module",
        fontSize: 23,
    },
    dropdownModule: {
        width: "10%",
    },

});

export default AddTask;