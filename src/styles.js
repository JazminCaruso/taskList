import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    marginTop: 25,
  },
  
  
});
