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
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>
              Estás seguro de que quiere eliminar este item?
            </Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancelar" color="#424D9E" onPress={() => setIsVisible(false)} />
            <Button
              title="Confirmar"
              color="red"
              onPress={() => onHandlerDelete(selectedTask?.id)}
            />
          </View>
        </View>
      </Modal>
    );
};

export default ModalDelete;