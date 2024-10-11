import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAdd={addTask} />
    </SafeAreaView>
  );
}

export default App;
