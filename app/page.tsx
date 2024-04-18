"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

interface Task {
  id: string;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <Head>
        <title>Task Manager App</title>
      </Head>

      <main>
        <h1 className='text-5xl mb-2 text-center mt-3'>Task Manager App</h1>
        <h2 className="text-xl text-center mb-2">By: Guruprasath Jayaprakash</h2>
        <TaskForm onAdd={addTask} />
        <div className="task-list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </div>
      </main>

      <style jsx>{`
        /
      `}</style>
    </div>
  );
};

export default Home;