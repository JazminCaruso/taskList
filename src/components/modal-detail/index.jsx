import { useState, useEffect } from 'react';
import { View, Button, Text, Modal, TextInput } from 'react-native';

import { styles } from './styles';

const ModalDetail = ({
  isVisible,
  selectedTask,
  setIsVisible,
  onHandlerDelete,
  onSaveDescriptionAndDeadline,
}) => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    setDescription(selectedTask?.description || '');
    setDeadline(selectedTask?.deadline || '');
  }, [selectedTask]);

  const onSave = () => {
    onSaveDescriptionAndDeadline(selectedTask?.id, description, deadline);
    setIsVisible(false);
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Task Detail</Text>
        <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        <View style={styles.modalDetail}>
          <Text style={styles.textDetail}>Description: </Text>
          <TextInput
            style={styles.inputDetail}
            placeholder="write something"
            value={description}
            onChangeText={setDescription}
            autoCapitalize="none"
            autoCorrect={false}
            cursorColor="#acacac"
            selectionColor="#683257"
            placeholderTextColor="#acacac"
          />
        </View>
        <View style={styles.modalDetail}>
          <Text style={styles.textDetail}>Deadline: </Text>
          <TextInput
            style={styles.inputDetail}
            placeholder="DD/MM"
            value={deadline}
            onChangeText={setDeadline}
            autoCapitalize="none"
            autoCorrect={false}
            cursorColor="#fff"
            selectionColor="#fff"
            placeholderTextColor="#acacac"
          />
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancel" color="blue" onPress={() => setIsVisible(false)} />
          <Button title="Delete task" color="red" onPress={() => onHandlerDelete(selectedTask?.id)} />
          <Button title="Save" color="green" onPress={onSave} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalDetail;
