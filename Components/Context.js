import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ModuleContext = createContext();

export const ModuleProvider = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [moduleItems, setModuleItems] = useState([]);
  const [moduleTitle, onChangeModuleTitle] = useState("");

  const [color, setColor] = useState("#000000");
  const [colorModalVisible, setColorModalVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  React.useEffect(() => {
    saveTasks(task);
  }, [task]);
  const saveTasks = async (taskItem) => {
    try {
      const stringifyTask = JSON.stringify(taskItem);
      await AsyncStorage.setItem("Task", stringifyTask);
    } catch (error) {
      console.log(error);
    }
  };
  const getTask = async () => {
    try {
      const tsk = await AsyncStorage.getItem("Task");
      if (taskItem.length != null) {
        setTaskItem(JSON.parse(tsk));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // React.useEffect(() => {
  //   getModules();
  // }, []);
  // React.useEffect(() => {
  //   saveModules(moduleItems);
  // }, [moduleItems]);

  // const saveModules = async (moduleItems) => {
  //   try {
  //     const stringifyModule = JSON.stringify(moduleItems);
  //     await AsyncStorage.setItem("Module", stringifyModule);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getModules = async () => {
  //   try {
  //     const mods = await AsyncStorage.getItem("Module");
  //     if (moduleItems != null) {
  //       setModuleItems(JSON.parse(mods));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ModuleContext.Provider
      value={{
        modalVisible,
        setModalVisible,
        moduleItems,
        setModuleItems,
        color,
        setColor,
        colorModalVisible,
        setColorModalVisible,
        moduleTitle,
        onChangeModuleTitle,
        title,
        setTitle,
        description,
        setDescription,
        task,
        setTask,
        taskItem,
        setTaskItem,
      }}
    >
      {props.children}
    </ModuleContext.Provider>
  );
};
