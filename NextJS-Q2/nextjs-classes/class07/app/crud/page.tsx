"use client";
import React, { useState } from "react";
import { SquarePlus, Trash2 } from "lucide-react";
import useToast from "quick-toastify";

const Todo = () => {
  const { toastComponent, triggerToast } = useToast("top-right");

  interface Todo {
    id: number;
    title: string;
    date: string;
  }

  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const date = new Date();

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) {
      triggerToast({
        type: "error",
        message: "Task cannot be empty",
        duration: 2000,
        animationIn: "slide",
        animationOut: "slide",
      });
      return;
    }

    // Adding a new task
    const newTodo = {
      id: todos.length + 1, // Incremental ID
      title: task,
      date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
    };
    setTodos([...todos, newTodo]);
    triggerToast({
      type: "success",
      message: "Task added successfully",
      duration: 2000,
      animationIn: "slide",
      animationOut: "slide",
    });

    setTask(""); // Clear input after adding
  };

  const deleteTask = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    triggerToast({
      type: "success",
      message: "Task deleted successfully",
      duration: 2000,
      animationIn: "slide",
      animationOut: "slide",
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl md:text-5xl font-bold my-8">Todo App</h1>
      <form className="relative rounded-full overflow-hidden bg-white shadow-xl mt-5 w-72">
        <input
          className="bg-transparent text-black pl-6 pr-10 py-5 w-full rounded-full font-sans text-lg font-semibold"
          placeholder="Enter a task"
          name="text"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="absolute right-2 top-[0.4em]">
          <button
            type="submit"
            className="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
            onClick={addTask}
          >
            <SquarePlus className="z-10 relative transition-transform duration-500 group-hover:rotate-180" />
            <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
            <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
          </button>
        </div>
      </form>

      <div className="flex-grow w-full max-w-xl overflow-auto">
        <h1 className="text-4xl md:text-5xl font-bold my-8">Task List</h1>
        {/* Conditional Task List */}
        {todos.length > 0 ? (
          <div className="w-full h-full">
            <div className="overflow-y-auto max-h-[50vh] bg-white shadow-md rounded-lg w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="sticky top-0 bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase">
                      Task
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo) => (
                    <tr
                      key={todo.id}
                      className="border-t text-black border-gray-200"
                    >
                      <td className="px-4 py-3 text-left whitespace-nowrap">
                        {todo.title}
                      </td>
                      <td className="px-4 py-3 text-left whitespace-nowrap">
                        {todo.date}
                      </td>
                      <td className="px-4 py-3 text-left whitespace-nowrap flex space-x-4">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => deleteTask(todo.id)}
                        >
                          <Trash2 className="inline-block" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="mt-8 text-center text-gray-300 text-xl">No Task Found</p>
        )}
      </div>
      {toastComponent} {/* Display toast notifications */}
    </main>
  );
};

export default Todo;
