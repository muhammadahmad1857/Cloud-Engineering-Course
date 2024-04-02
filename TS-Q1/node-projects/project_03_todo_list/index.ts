#! /usr/bin/env node
import inquirer from "inquirer";

interface Todos {
  task: string;
  date: string;
  id: number;
  description: string;
  lastUpdatedOn: string;
  completed: string | boolean;
  starred: string | boolean;
}

class App {
  taskList: Todos[]; // Define taskList as a property of the class to hold Todos
  starredTodos: Todos[]; // Define starredTodos as a property of the class to hold Todos
  completedTodos: Todos[]; // Define completedTodos as a property of the class to hold Todos
  constructor() {
    this.taskList = []; // Initialize taskList as an empty array
    this.starredTodos = []; // Initialize starredTodos as an empty array
    this.completedTodos = [];
  }

  async start() {
    while (true) {
      console.log(
        "=================== Welcome to todo management System! ================="
      );

      const choice = await inquirer.prompt([
        {
          type: "list",
          name: "choice",
          message: "Select one of the actions",
          choices: [
            "Add a new todo",
            "View all todos",
            "View completed todos",
            "View starred todos",
            "Delete a todo",
            "Edit a todo",
            "Complete a todo",
            "Uncomplete a todo",
            "Star a todo",
            "Unstar a todo",
            "Complete all todos",
            "Delete all todos",
            "Search a todo",
            "Exit the application",
          ],
        },
      ]);
      let userChoice: string = choice.choice;
      switch (userChoice) {
        case "Add a new todo":
          console.log("Enter the task you want to add:");
          const inputTask = await inquirer.prompt([
            {
              type: "string",
              name: "task",
              message: "Enter the task you want to add:",
            },
            {
              type: "string",
              name: "description",
              message: "Enter the description of task you want to add:",
            },
          ]);
          let task: string = inputTask.task;
          let description: string = inputTask.description;
          this.addTodo(task, description);
          break;
        case "View all todos":
          this.viewTask();
          break;
        case "View completed todos":
          this.viewCompletedTodos();
          break;
        case "View starred todos":
          this.viewStarredTodos();
          break;
        case "Delete a todo":
          console.log("Enter the id of the task you want to delete:");
          const id = await inquirer.prompt([
            {
              type: "number",
              name: "id",
              message: "Enter the id of the task you want to delete:",
            },
          ]);
          let taskId: number = id.id;
          this.deleteTodo(taskId);
          break;
        case "Edit a todo":
          console.log("Enter the id of the todo you want to edit:");
          const editId = await inquirer.prompt([
            {
              type: "number",
              name: "id",
              message: "Enter the id of the todo you want to edit:",
            },
          ]);
          const editTodoId: number = editId.id;

          console.log("1. Update task");
          console.log("2. Update description");
          console.log("3. Update both task and description");
          const updateChoice = await inquirer.prompt([
            {
              type: "list",
              name: "updateChoice",
              message: "Enter your update choice:",
              choices: [
                "Update task",
                "Update description",
                "Update both task and description",
              ],
            },
          ]);
          const userUpdateChoice: string = updateChoice.updateChoice;

          switch (userUpdateChoice) {
            case "Update task":
              console.log("Enter the new task:");
              const newTask = await inquirer.prompt([
                {
                  type: "string",
                  name: "task",
                  message: "Enter the new task:",
                },
              ]);
              this.editTask(newTask.task, editTodoId);
              break;

            case "Update description":
              console.log("Enter the new description:");
              const newDescription = await inquirer.prompt([
                {
                  type: "string",
                  name: "description",
                  message: "Enter the new description:",
                },
              ]);
              this.editDescription(newDescription.description, editTodoId);
              break;

            case "Update both task and description":
              console.log("Enter the new task:");
              const updatedTask = await inquirer.prompt([
                {
                  type: "string",
                  name: "task",
                  message: "Enter the new task:",
                },
              ]);
              console.log("Enter the new description:");
              const updatedDescription = await inquirer.prompt([
                {
                  type: "string",
                  name: "description",
                  message: "Enter the new description:",
                },
              ]);
              this.editTaskAndDescription(
                updatedTask.task,
                updatedDescription.description,
                editTodoId
              );
              break;

            default:
              console.log("Invalid update choice.");
              break;
          }
          break;
        case "Complete a todo":
          console.log("Enter the id of the todo you want to complete:");
          const completedTodo = await inquirer.prompt([
            {
              type: "number",
              name: "id",
              message: "Enter the id of the todo you want to complete:",
            },
          ]);
          const completedTodoId: number = completedTodo.id;
          this.completeTodo(completedTodoId);

          break;
        case "Uncomplete a todo":
          console.log("Enter the id of the todo you want to unComplete:");
          const unCompletedTodo = await inquirer.prompt([
            {
              type: "number",
              name: "id",
              message: "Enter the id of the todo you want to unComplete:",
            },
          ]);
          const unCompletedTodoId: number = unCompletedTodo.id;
          this.uncompleteTodo(unCompletedTodoId);
          break;
        case "Star a todo":
          console.log("Enter the id of the todo you want to mark as starred:");
          const starredTodo = await inquirer.prompt([
            {
              type: "number",
              name: "id",
              message: "Enter the id of the todo you want to mark as starred:",
            },
          ]);
          const starredTodoId: number = starredTodo.id;
          this.starTodo(starredTodoId);
          break;
        case "Unstar a todo":
          console.log(
            "Enter the id of the todo you want to mark as unStarred:"
          );
          const unStarredTodo = await inquirer.prompt([
            {
              type: "number",
              name: "id",
              message:
                "Enter the id of the todo you want to mark as unStarred:",
            },
          ]);
          const unStarredTodoId: number = unStarredTodo.id;
          this.unstarTodo(unStarredTodoId);
          break;
        case "Complete all todos":
          this.completeAllTodos(); // Complete all todos functionality
          break;
        case "Delete all todos":
          this.deleteAll();
          break;
        case "Search a todo":
          console.log("Enter the keyword to search for in the task:");
          const keywordSearch = await inquirer.prompt([
            {
              type: "string",
              name: "keyword",
              message: "Enter the keyword to search for in the todos:",
            },
          ]);
          const keyword: string = keywordSearch.keyword;
          this.searchTodo(keyword);

          break;

        case "Exit the application":
          process.exit(); // Exit the application
        default:
          console.log("Invalid Input.");
          break;
      }
    }
  }

  addTodo(task: string, description: string) {
    // Add a new task to the taskList
    this.taskList.push({
      task: task,
      date: new Date().toLocaleString("en-US", { hour12: true }),
      lastUpdatedOn: "Not updated",
      id: this.taskList.length + 1,
      description: description,
      completed: true ? "completed" : "not completed",
      starred:  true ? "starred" : "unStarred",
    });
    console.log(
      `The todo added successfully with the id: ${this.taskList.length} `
    );
  }

  viewTask() {
    // View all the tasks in the taskList
    if (this.taskList.length > 0) {
      console.log("The list of task are as follows:");

      for (let i of this.taskList) {
        console.log(i);
      }
    } else {
      console.log("No todos found!");
    }
  }
  deleteTodo(id: number) {
    // Delete a task from the taskList
    if (!isNaN(id)) {
      this.taskList = this.taskList.filter((todo) => todo.id !== id);
      console.log(`The todo with the id: ${id} deleted successfully`);
    } else {
      console.log("Error is occurred while deleting the todo!");
    }
  }
  editTask(task: string, id: number) {
    // Edit a task in the taskList
    if (!isNaN(id)) {
      this.taskList = this.taskList.map((todo) => {
        if (todo.id === id) {
          todo.task = task;
          todo.lastUpdatedOn = new Date().toLocaleString("en-US", {
            hour12: true,
          });
        }
        return todo;
      });
      console.log(`The todo with the id: ${id}'s task is edited successfully `);
    } else {
      console.log(
        `There is an error occuring while updating the task of todo! `
      );
    }
  }
  editDescription(description: string, id: number) {
    // Edit a task in the taskList
    if (!isNaN(id)) {
      this.taskList = this.taskList.map((todo) => {
        if (todo.id === id) {
          todo.description = description;
          todo.lastUpdatedOn = new Date().toLocaleString("en-US", {
            hour12: true,
          });
        }
        return todo;
      });
      console.log(
        `The todo with the id: ${id}'s description is edited successfully `
      );
    } else {
      console.log(
        `There is an error occuring while updating the description of todo! `
      );
    }
  }
  editTaskAndDescription(task: string, description: string, id: number) {
    // Edit a task in the taskList
    if (!isNaN(id)) {
      this.taskList = this.taskList.map((todo) => {
        if (todo.id === id) {
          todo.task = task;
          todo.description = description;
          todo.lastUpdatedOn = new Date().toLocaleString("en-US", {
            hour12: true,
          });
        }
        return todo;
      });
      console.log(`The todo with the id: ${id} edited successfully `);
    } else {
      console.log(`There is an error occuring while updating the todo! `);
    }
  }
  deleteAll() {
    // Delete all the tasks from the taskList
    if (this.taskList.length > 0) {
      this.taskList = [];
      console.log("All the todos deleted successfully!");
    } else {
      console.log("No todos Found!");
    }
  }
  searchTodo(keywordSearch: string) {
    const keyword: string = keywordSearch.toLowerCase();
    const foundByKeyword = this.taskList.filter(
      (todo) =>
        todo.task.toLowerCase().includes(keyword) ||
        todo.description.toLowerCase().includes(keyword) ||
        todo.id.toString().includes(keyword) // Search by ID
    );
    if (foundByKeyword.length > 0) {
      console.log("Todos found:");
      foundByKeyword.forEach((todo) => console.log(todo));
    } else {
      console.log("Todos not found.");
    }
  }
  // Complete a todo
  completeTodo(id: number) {
    if (!isNaN(id)) {
      this.taskList = this.taskList.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      });
      console.log(`The todo with the id: ${id} completed successfully `);
    }
    // const todoIndex = this.taskList.findIndex((todo) => todo.id === id);
    // if (todoIndex !== -1) {
    //   this.taskList[todoIndex].completed = true;
    //   console.log(`The todo with the ID ${id} has been completed.`);
    // } else {
    //   console.log("Todo not found.");
    // }
  }

  // Uncomplete a todo
  uncompleteTodo(id: number) {
    if (!isNaN(id)) {
      this.taskList = this.taskList.map((todo) => {
        if (todo.id === id) {
          todo.completed = false;
        }
        return todo;
      });
      console.log(
        `The todo with the id: ${id} marked Uncompleted successfully `
      );
    }
  }

  // Star a todo
  starTodo(id: number) {
    if (!isNaN(id)) {
      this.taskList = this.taskList.map((todo) => {
        if (todo.id === id) {
          todo.starred = true;
        }
        return todo;
      });
      console.log(`The todo with the id: ${id} starred successfully `);
    }
    // const todoIndex = this.taskList.findIndex((todo) => todo.id === id);
    // if (todoIndex !== -1) {
    //   this.taskList[todoIndex].starred = true;
    //   console.log(`The todo with the ID ${id} has been starred.`);
    // } else {
    //   console.log("Todo not found.");
  }

  // Unstar a todo
  unstarTodo(id: number) {
    if (!isNaN(id)) {
      this.taskList = this.taskList.map((todo) => {
        if (todo.id === id) {
          todo.starred = false;
        }
        return todo;
      });
      console.log(`The todo with the id: ${id} mark unstarred successfully `);
    }
  }
  viewStarredTodos() {
    const starredTodos = this.taskList.filter((todo) => todo.starred);
    if (starredTodos.length > 0) {
      console.log("Starred Todos:");
      const formattedStarredTodos = starredTodos.map((todo) => ({
        task: todo.task,
        description: todo.description,
        date: todo.date,
        id: todo.id,
      }));
      console.log(formattedStarredTodos);
    } else {
      console.log("No starred todos found.");
    }
  }

  // View completed todos
  viewCompletedTodos() {
    const completedTodos = this.taskList.filter((todo) => todo.completed);
    if (completedTodos.length > 0) {
      console.log("Completed Todos:");
      const formattedCompletedTodos = completedTodos.map((todo) => ({
        task: todo.task,
        description: todo.description,
        date: todo.date,
        id: todo.id,
      }));
      console.log(formattedCompletedTodos);
    } else {
      console.log("No completed todos found.");
    }
  }

  // Complete all todos
  completeAllTodos() {
    this.taskList.forEach((todo) => (todo.completed = true));
    console.log("All todos marked as completed.");
  }
}

const app = new App();

app.start();
