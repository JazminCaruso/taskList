import { useState } from 'react';
import { View, Button, SafeAreaView, Text, FlatList, Modal, TouchableOpacity } from 'react-native';

import { InputTask, TaskItem, ModalDelete } from './components/components'

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

  const renderItem = ({ item }) => <TaskItem item = {item} onPressItem={onHandlerModal} />;

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
      <ModalDelete 
          isVisible={isVisible}
          selectedTask={selectedTask}
          setIsVisible={setIsVisible}
          onHandlerDelete={onHandlerDelete}
      />
    </SafeAreaView>
  );
}
