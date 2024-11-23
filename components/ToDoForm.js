import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ToDoForm = ({ onAdd }) => {
  const [task, setTask] = React.useState('');

  const handleAdd = () => {
    if (!task.trim()) {
      // Show an alert if the task input is empty
      Alert.alert('Invalid Task', 'Task cannot be empty!');
      return;
    }

    onAdd(task.trim());
    setTask('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    paddingHorizontal: 10,
  },
});

export default ToDoForm;
