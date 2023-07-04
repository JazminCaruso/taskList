import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        paddingVertical: 20,
        backgroundColor: "#683257",
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 2,
        color: "#fff",
    },
    selectedTask: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
        color: "#fff",
    },
    modalDetail: {
        flexDirection: "row",
    },
    textDetail: {
        fontSize: 20,
        color: "#fff",
    },
    inputDetail: {
        color: "#fff",
        fontSize: 18,
        fontStyle: "italic",
    },
    modalDetailContainer: {
        paddingVertical: 20,
        backgroundColor: "#683257",
    },
    modalDetailMessage: {
        fontSize: 18,
        color: "#fff",
    },
    modalButtonContainer: {
        marginTop: 25,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginHorizontal: 20,
        backgroundColor: "#fff",
        padding: 10,
    },
});
