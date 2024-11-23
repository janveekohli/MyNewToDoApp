import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    // Prevent empty or duplicate tasks from being added
    if (!task.trim()) {
      alert('Task cannot be empty!');
      return;
    }

    if (tasks.includes(task.trim())) {
      alert('Task already exists!');
      return;
    }

    setTasks((prevTasks) => [...prevTasks, task.trim()]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>ToDo App</Text>
      <View style={styles.listContainer}>
        <ToDoList tasks={tasks} />
      </View>
      <ToDoForm onAdd={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    flex: 1,
    marginBottom: 20,
  },
});

export default App;
