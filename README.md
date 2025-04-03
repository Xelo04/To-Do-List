# To Do List

The **To Do List** project is a personal initiative to demonstrate the core concepts of **React**, **HTML**, **CSS**, and **JavaScript**. This project showcases the creation of a responsive and interactive task management application, focusing on modern web development practices.

---

## 🚀 Features

- **Task Management**: Add, edit, delete, and mark tasks as complete.
- **Dynamic Updates**: React-powered updates for seamless user interaction.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Local Storage**: Saves tasks persistently in the browser.

---

## 📂 Project Structure

The project is structured as follows:

```
.project-root/
│── .gitignore              # Git ignore file
│── eslint.config.js        # ESLint configuration
│── index.html              # Main HTML file
│── LICENSE                 # License file
│── package.json            # npm configuration file
│── README.md               # Project documentation
│── vite.config.js          # Vite configuration
│
├── public/                 # Static files
├── screenshots/            # Screenshots of the project
│
└── src/                    # Main application source code
    │── App.jsx             # Main application component
    │── index.css           # Global CSS styles
    │── main.jsx            # Application entry point
    │
    └── components/         # Folder for components
        │── TodoCard.jsx    # Task card component
        │── TodoInput.jsx   # Task input component
        └── TodoList.jsx    # Task list component
```

---

## 🛠️ Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **CSS**: For styling the application.
- **LocalStorage**: For persisting data in the browser.
- **Google Fonts**: For modern typography.
- **Material Icons**: For intuitive icons.

---

## 🌟 Key Functionalities

1. **Add Tasks**:

   - Users can add new tasks with a title.

2. **Edit Tasks**:

   - Modify existing tasks to update their details.

3. **Delete Tasks**:

   - Remove tasks from the list.

4. **Persistent Storage**:
   - Tasks are saved in the browser's local storage to retain data between sessions.

---

## 📸 Screenshots

### Main Interface

![Main Interface](public/screenshots/MainInterface.png)

---

## ⚙️ Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Xelo04/To-Do-List
   cd To-Do-List
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser at http://localhost:5173.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is under the MIT License - see the [LICENSE](./LICENSE) file for details.
