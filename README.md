# React Todo List App

A simple and interactive Todo List application built with React.js. This app allows users to add new tasks, mark them as complete, and delete them. The todo items are persisted in local storage.

## Features

*   **Add Todo**: Easily add new tasks to your list.
*   **Mark Complete**: Toggle the completion status of a task.
*   **Delete Todo**: Remove tasks from your list.
*   **Persistence**: Your todo list is saved in the browser's local storage, so it remains even after you close and reopen the browser.

## Technologies Used

*   React.js
*   HTML5
*   CSS3
*   JavaScript (ES6+)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

*   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/todolist-app.git
    cd todolist-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:

```bash
npm start
```

This will open the application in your browser at `http://localhost:3000` (or another available port). The page will reload if you make edits.

## Project Structure

```
todolist-app/
├── public/
│   ├── index.html         # Main HTML file
│   └── ...                # Other public assets
├── src/
│   ├── components/
│   │   ├── TodoForm.js    # Component for adding new todos
│   │   ├── TodoItem.js    # Component for a single todo item
│   │   └── TodoList.js    # Component for displaying the list of todos
│   ├── App.css            # Main application styles
│   ├── App.js             # Main application component
│   ├── index.css          # Global styles
│   └── index.js           # React app entry point
├── .gitignore
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
