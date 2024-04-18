import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TaskFormProps {
  onAdd: (newTask: { id: string; title: string; description: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      alert('Please enter a title');
      return;
    }

    const newTask = {
      id: uuidv4(),
      title,
      description,
    };

    onAdd(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='text-black' htmlFor="title">Title</label>
        <input className='text-black'
          type="text"
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className='text-black' htmlFor="description">Description</label>
        <textarea className='text-black'
          id="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Add Task</button>

      <style jsx>{`
        .task-form {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 8px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        input,
        textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: #4caf50;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </form>
  );
};

export default TaskForm;
