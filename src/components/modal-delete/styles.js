import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
        backgroundColor: '#683257',
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
      },
      modalDetailContainer: {
        paddingVertical: 20,
        backgroundColor: '#683257',
      },
      modalDetailMessage: {
        fontSize: 18,
        color: '#fff',
      },
      selectedTask: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
        color: '#fff',
      },
      modalButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        backgroundColor: '#fff',
      },
});

