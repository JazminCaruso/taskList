import { Button } from "react-native";

const AddTask = ({ task, onHandlerCreateTask }) => {
    return (
        <Button
            disabled={task.length <= 2}
            title="Add"
            color="#683257"
            onPress={onHandlerCreateTask}
        />
    );
};

export default AddTask;
