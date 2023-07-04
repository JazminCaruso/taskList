import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import {
    InputTask,
    TaskItem,
    AddTask,
    ModalDetail,
} from "./components/components";
import { styles } from "./styles";

export default function App() {
    const [borderColor, setBorderColor] = useState("#acacac");
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [viewDelete, setViewDelete] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const onHandlerFocus = () => {
        setBorderColor("#683257");
    };

    const onHandlerBlur = () => {
        setBorderColor("#acacac");
    };

    const onHandlerChangeText = (text) => {
        setTask(text);
    };

    const onHandlerCreateTask = () => {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: Date.now().toString(),
                value: task,
                description: "",
                deadline: "",
            },
        ]);
        setTask("");
    };

    const onHandlerModal = (item) => {
        setSelectedTask(item);
        setIsVisible(true);
        setViewDelete(false);
    };

    const onHandlerDelete = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        setViewDelete(false);
    };

    const onSaveDescriptionAndDeadline = (id, description, deadline) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        description,
                        deadline,
                    };
                }
                return task;
            })
        );
    };

    const renderItem = ({ item }) => (
        <TaskItem item={item} onPressItem={onHandlerModal} />
    );

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
                <Text style={styles.text}>
                    Tap the task to view or add details.
                </Text>
                <Text style={styles.text}>
                    If you haven't added any yet, do it!
                </Text>
                <View style={styles.listContainer}>
                    <FlatList
                        data={tasks}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
            <ModalDetail
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                selectedTask={selectedTask}
                viewDelete={viewDelete}
                setViewDelete={setViewDelete}
                onHandlerDelete={onHandlerDelete}
                onSaveDescriptionAndDeadline={onSaveDescriptionAndDeadline}
            />
        </SafeAreaView>
    );
}
