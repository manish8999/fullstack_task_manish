import React from 'react';

interface Task {
    id: string;
    task: string;
}

interface TaskListViewProps {
    tasks: Task[];
}

const TaskListView: React.FC<TaskListViewProps> = ({ tasks }) => {
    return (
        <div>
            <h1 className="text-lg font-semibold">Notes</h1>
            {tasks.length === 0 ? (
                <p className="text-gray-500">There are no tasks available.</p>
            ) : (
                <ul className="list-none pl-0 mb-2 border-t border-gray-300 overflow-y-auto custom-scrollbar h-64">
                    {tasks.map((task,index) => (
                        <li
                            key={index}
                            className={`pt-3 pb-3 ${tasks.indexOf(task) > 0 ? 'border-t border-gray-300' : ''}`}
                        >
                            <span className="text-[17px]">{task.task}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskListView;
