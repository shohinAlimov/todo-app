# 📝 Todo List Application

A modern, fully-featured todo list application built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in React development, including state management, local storage persistence, and component-based architecture.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

- ✅ **Create Tasks** - Add new todos with input validation
- ✏️ **Edit Tasks** - Inline editing with keyboard shortcuts (Enter to save, Escape to cancel)
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- ☑️ **Toggle Completion** - Mark tasks as complete/incomplete with a single click
- 💾 **Persistent Storage** - Automatic save to localStorage
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 📱 **Responsive Design** - Works seamlessly on all devices
- ♿ **Accessible** - Keyboard navigation and semantic HTML
- 🔒 **Type-Safe** - Full TypeScript support

## 🚀 Demo

[Live Demo](#) https://shohinalimov.github.io/todo-app/

## 🛠️ Tech Stack

- **Frontend Framework:** [React 18](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Storage:** Browser localStorage API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or other) to see the application running.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The optimized files will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 📁 Project Structure

```
todo-list-app/
├── public/              # Static assets
├── src/
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── style.css       # Global styles & Tailwind imports
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── README.md
```

## 🎯 Usage

### Creating a New Task

1. Type your task in the input field
2. Click the "Create" button or press Enter
3. Your task will appear in the list below

### Editing a Task

1. Click the "Edit" button on any task
2. Modify the text in the input field
3. Press Enter or click "Save" to confirm
4. Press Escape or click "Cancel" to discard changes

### Completing a Task

- Click anywhere on the task row to toggle its completion status
- Completed tasks will be shown with a strikethrough style

### Deleting a Task

- Click the "Delete" button to remove a task permanently

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 🗺️ Roadmap

Future enhancements planned:

- [ ] Add task categories/tags
- [ ] Implement drag-and-drop reordering
- [ ] Add due dates and reminders
- [ ] Dark/Light theme toggle
- [ ] Export/Import todos (JSON/CSV)
- [ ] Multi-language support (i18n)
- [ ] Search and filter functionality
- [ ] Task priority levels
- [ ] Progressive Web App (PWA) support
- [ ] Backend integration for cloud sync

## 👤 Author

**Shohin Alimov**

- LinkedIn: https://www.linkedin.com/in/shohin-alimov/
- Email: shohinalimov2008@gmail.com

If you like this project, please give it a ⭐️ on GitHub!
