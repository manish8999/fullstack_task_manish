//State management without Redux

import React, { useState, useEffect } from 'react';
import { getTaskList, addTask } from '../api/task.service';
import "../App.css";
import TaskListView from './common/TaskListView';

interface Task {
    id: string;
    task: string;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getTaskList();
            if (response.data) {
                setTasks(response.data);
            } else {
                setError(response.error || 'Failed to fetch tasks');
            }
            setLoading(false);
        };

        fetchTasks();
    }, []);

    const handleAddTask = async () => {
        if (!newTask.trim()) {
            alert('Add Note name');
            return;
        }
        const response = await addTask(newTask);
        if (response.data) {
            setTasks((prevTasks) => [{ id: response.data.id, task: newTask }, ...prevTasks]);
            setNewTask('');
        } else {
            setError(response.error || 'Failed to add task');
        }
    };


    return (
        <>
            {loading && (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            )}

            {error && (
                <div className="spinner-container">
                    <p className="bg-white h-24 w-72 rounded-lg mx-2.5 text-center pt-8">
                        {error}
                    </p>
                </div>
            )}


            <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" style={{ boxShadow: '0px 1px 7px 0px #00000038' }}>
                    <h1 className="flex items-center text-[30px] font-extrabold mb-4">
                        <img src="/note.png" alt="Note Icon" style={{ width: "55px", height: "55px" }} />
                        Note App
                    </h1>

                    <div className="flex items-center mb-4 space-x-2">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            className="border border-white-300 p-2 rounded-lg w-full h-11"
                            placeholder="New Note..."
                            style={{
                                fontWeight: 400,
                                boxShadow: '0px 1px 5px 0px #00000038',

                            }}
                        />

                        <button
                            onClick={handleAddTask}
                            className="bg-amber-800 text-white p-2 rounded-lg w-[7.5rem]  flex items-center justify-center"
                        >
                            <i className="fa fa-plus-circle text-white mr-2" aria-hidden="true"></i>
                            <span className="font-bold">Add</span>
                        </button>

                    </div>

                    <TaskListView tasks={tasks || []} />

                </div>
            </div>
        </>

    );
};

export default TaskList;


//State management useing Redux
/*
import React, { useState, useEffect } from "react";
import "../App.css";
import TaskListView from "./common/TaskListView";
import { useAppDispatch as useDispatch } from "../store/hook";
import { useSelector } from "react-redux";
import { fetchTasks, addTask } from "../store/api/task"; // Correct path for actions

interface Task {
    id: string;
    task: string;
}

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: any) => state.tasks.tasks);
    const loading = useSelector((state: any) => state.tasks.loading);
    const error = useSelector((state: any) => state.tasks.error);

    const [newTask, setNewTask] = useState<string>("");

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleAddTask = () => {
        if (!newTask.trim()) {
            alert("Add Note name");
            return;
        }
        dispatch(addTask(newTask));
        dispatch(fetchTasks());

        setNewTask("");
    };

    return (
        <>
            {loading && (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            )}

            {error && (
                <div className="spinner-container">
                    <p>{error}</p>
                </div>
            )}

            <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
                <div
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                    style={{ boxShadow: "0px 1px 7px 0px #00000038" }}
                >
                    <h1 className="flex items-center text-[30px] font-extrabold mb-4">
                        <img
                            src="/note.png"
                            alt="Note Icon"
                            style={{ width: "55px", height: "55px" }}
                        />
                        Note App
                    </h1>

                    <div className="flex items-center mb-4 space-x-2">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            className="border border-white-300 p-2 rounded-lg w-full h-11"
                            placeholder="New Note..."
                            style={{
                                fontWeight: 400,
                                boxShadow: "0px 1px 5px 0px #00000038",
                            }}
                        />

                        <button
                            onClick={handleAddTask}
                            className="bg-amber-800 text-white p-2 rounded-lg w-[7.5rem]  flex items-center justify-center"
                        >
                            <i className="fa fa-plus-circle text-white mr-2" aria-hidden="true"></i>
                            <span className="font-bold">Add</span>
                        </button>
                    </div>

                    <TaskListView tasks={tasks || []} />
                </div>
            </div>
        </>
    );
};

export default TaskList;


*/