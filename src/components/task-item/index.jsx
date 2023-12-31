import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onPressItem, item }) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onPressItem(item)}
        >
            <Text style={styles.listItem}>{item.value}</Text>
        </TouchableOpacity>
    );
};

export default TaskItem;
