import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

interface TaskProps {
  task: {
    id: string;
    title: string;
    description: string;
  };
  onDelete: (taskId: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    <div className="task">
      <div className="task-header">
        <h3 className='text-black'>{task.title}</h3>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          <RiDeleteBinLine />
        </button>
      </div>
      <p>{task.description}</p>

      <style jsx>{`
        .task {
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .task-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        h3 {
          margin: 0;
          font-size: 1.2rem;
        }
        .delete-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: #ff3b3b;
          transition: color 0.3s;
        }
        .delete-btn:hover {
          color: #ff0000;
        }
        p {
          margin: 0;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default Task;
