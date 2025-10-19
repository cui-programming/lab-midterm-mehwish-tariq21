import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  teacherContainer: {
    padding: 15,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    marginBottom: 15,
  },
  teacherTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  tasbihContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  phrase: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
  count: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginHorizontal: 15,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});