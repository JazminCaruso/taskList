import { View, Button, Text, Modal } from 'react-native';

import { styles } from './styles';

const ModalDelete = ({
  setIsVisible,
  viewDelete,
  setViewDelete,
  selectedTask,
  onHandlerDelete,
}) => {

  return (
    <Modal visible={viewDelete} animationType='slide'>
        <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Delete task</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>
            Are you sure to delete this task?
          </Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button 
            title="Cancel" 
            color="#424D9E" 
            onPress={() => setViewDelete(false) } />
          <Button
            title="Yes, delete"
            color="red"
            onPress={() => {
              onHandlerDelete(selectedTask?.id);
              setViewDelete(false);
              setTimeout(() => {
                setIsVisible(false);
              }, 100);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;