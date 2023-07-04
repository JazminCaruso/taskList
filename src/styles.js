import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#dfdcd8',
  },
  title: {
    fontSize:50,
    textAlign: 'center',
    color: '#683257',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#dfdcd8',
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    marginTop: 25,
  },
});
