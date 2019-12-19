import React from 'react';
import { Task } from '../state';

interface TaskProps {
    task: Task;
    key: string,
}

const TaskComponent = ({ task }: TaskProps) => {
    return (
        <div>
            <h3>{task.title}</h3>
    <p>estimated time to complete: {task.estimatedTime} minutes.</p>
        </div>
    );
};

export default TaskComponent;