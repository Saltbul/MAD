import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={200}
    />
  );
}

const TextInputMultiline = () => {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius:5,
        borderColor:"#e8e8e8",
        marginHorizontal:20,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={10}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
}
export default TextInputMultiline;