import { useState } from "react";

export const useTaskState = () => {
    const [borderColor, setBorderColor] = useState('#acacac');
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    return {
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
    };
};