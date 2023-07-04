import { TextInput } from "react-native";

import { styles } from "./styles";

const InputTask = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  task,
}) => {
  return (
    <TextInput
      style={[styles.input, { borderColor }]}
      placeholder="new task"
      autoCapitalize="none"
      autoCorrect={false}
      cursorColor="#acacac"
      selectionColor="#683257"
      placeholderTextColor="#acacac"
      onFocus={onHandlerFocus}
      onBlur={onHandlerBlur}
      onChangeText={onHandlerChangeText}
      value={task}
    />
  );
};

export default InputTask;