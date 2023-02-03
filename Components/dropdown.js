import React, { useState } from "react";
import { View, Text, Picker } from "react-native";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View>
      <Text>Choose an option:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
      <Text>Selected: {selectedValue}</Text>
    </View>
  );
};

export default Dropdown;
