import { View, Button, Text, Modal } from 'react-native';

import { styles } from "./styles";

const ModalDelete = ({
    isVisible,
    selectedTask,
    setIsVisible,
    onHandlerDelete,
}) => {
    return (
        <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Delete Task</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>
                Are you sure to delete this task?
            </Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" color="blue" onPress={() => setIsVisible(false)} />
            <Button
              title="Delete"
              color="red"
              onPress={() => onHandlerDelete(selectedTask?.id)}
            />
          </View>
        </View>
      </Modal>
    );
};

export default ModalDelete;