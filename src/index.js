import { useState } from 'react';
import { View, Button, SafeAreaView, Text, FlatList, Modal, TouchableOpacity } from 'react-native';

import { InputTask } from './components/components'

import { styles } from './styles';

export default function App() {
  const [borderColor, setBorderColor] = useState('#C5C97E');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerFocus = () => {
    setBorderColor('#683257');
  };

  const onHandlerBlur = () => {
    setBorderColor('#C5C97E');
  };

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHandlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);
    setTask('');
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandlerDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
            borderColor={borderColor}
            onHandlerBlur={onHandlerBlur}
            onHandlerChangeText={onHandlerChangeText}
            onHandlerCreateTask={onHandlerCreateTask}
            onHandlerFocus={onHandlerFocus}
            task={task}
        />
        <View style={styles.listContainer}>
          <FlatList data={tasks} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
      </View>
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
    </SafeAreaView>
  );
}
