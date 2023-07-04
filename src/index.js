
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { InputTask, TaskItem, ModalDelete, AddTask } from './components/components'
import { useTaskState } from './const/state';
import { styles } from './styles';

export default function App() {
  
  const {
    borderColor,
    setBorderColor,
    task,
    setTask,
    tasks,
    setTasks,
    isVisible,
    setIsVisible,
    selectedTask,
    setSelectedTask,
  } = useTaskState();

  const onHandlerFocus = () => {
    setBorderColor('#683257');
  };

  const onHandlerBlur = () => {
    setBorderColor('#acacac');
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
        <Text style={styles.title}>My TaskList</Text>
        <View style={styles.inputContainer}>
          <InputTask
            borderColor={borderColor}
            onHandlerBlur={onHandlerBlur}
            onHandlerChangeText={onHandlerChangeText}
            onHandlerFocus={onHandlerFocus}
            task={task}
            onHandlerCreateTask={onHandlerCreateTask}
          />
          <AddTask
            task={task}
            onHandlerCreateTask={onHandlerCreateTask}
          />
        </View>
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
