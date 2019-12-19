import React from 'react';

import { Task } from '../state';
import TaskComponent from './Task';

interface TasksProps {
    tasks: Task[];
}
const Tasks = ({ tasks }: TasksProps) => {
    return (
        <div>
            <h2>Tasks:</h2>
            {tasks.map(task =>
                <TaskComponent key={task.title} task={task} />
            )}

        </div>
    );
};

export default Tasks;
