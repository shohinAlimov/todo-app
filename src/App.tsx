import { useEffect, useState, type FormEvent } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  }, [todos]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (newItem.trim().length === 0) {
      setError("Fill this field please!");
      return;
    }

    setError("");
    setTodos([...todos, { id: Date.now(), text: newItem, completed: false }]);
    setNewItem("");
  };

  const handleDelete = (idToDelete: number) => {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  };

  const handleToggle = (idToComplete: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === idToComplete
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleStartEdit = (idToEdit: number, currentText: string) => {
    setEditId(idToEdit);
    setEditText(currentText);
    setEditError("");
  };

  const handleCancelEdit = (currentText: string) => {
    setEditId(null);
    setEditText(currentText);
  };

  const handleSaveEdit = (idToSave: number) => {
    if (editText.trim().length === 0) {
      setEditError("Field can not be empty!");
      return;
    }

    setEditError("");

    setTodos(
      todos.map((todo) =>
        todo.id === idToSave ? { ...todo, text: editText } : todo
      )
    );

    setEditId(null);
    setEditText("");
    setError("");
  };

  return (
    <>
      <div className="container text-white">
        <h1 className="text-4xl font-black my-4">
          Simple Todo List Application
        </h1>
        <div className="border-l-4 border-blue-500 p-4 rounded mb-4">
          <h3 className="font-bold text-lg mb-2">About This Project</h3>
          <p className="text-white text-[16px]">
            A modern, responsive Todo List application built with{" "}
            <a
              className="underline font-semibold text-blue-600"
              href="https://react.dev/"
            >
              React 18
            </a>{" "}
            and{" "}
            <a
              className="underline font-semibold text-blue-600"
              href="https://www.typescriptlang.org/"
            >
              TypeScript
            </a>
            , powered by{" "}
            <a
              className="underline font-semibold text-purple-600"
              href="https://vite.dev/"
            >
              Vite
            </a>{" "}
            for lightning-fast development. Styled with{" "}
            <a
              className="underline font-semibold text-cyan-600"
              href="https://tailwindcss.com/"
            >
              Tailwind CSS
            </a>{" "}
            for a clean, utility-first design approach. Features include
            persistent local storage, task completion tracking, and an intuitive
            user interface.
          </p>
        </div>
        <form className="my-4" onSubmit={handleSubmit}>
          <label htmlFor="input">Create New Item</label>
          <div className="flex gap-2 items-center">
            <input
              className="border rounded px-2 py-1 w-100"
              type="text"
              onChange={(e) => setNewItem(e.target.value)}
              value={newItem}
              id="input"
            />
            <button
              className="cursor-pointer border border-blue-500 rounded px-2 py-1 bg-blue-500 text-white hover:bg-blue-700 transition-all duration-300"
              type="submit"
            >
              Create
            </button>
          </div>
          {error && (
            <span className="text-red-500 text-sm font-black">{error}</span>
          )}
        </form>

        <h2 className="mb-2">List:</h2>
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <li className="flex gap-2 items-center justify-between">
              {/* Кликабельная область для toggle */}
              {editId === todo.id ? (
                <>
                  <input
                    className="border rounded w-full py-2 pl-4"
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault(); // предотвращает отправку формы, если input внутри формы
                        handleSaveEdit(todo.id);
                      }

                      if (e.key === "Escape") {
                        e.preventDefault();
                        handleCancelEdit(todo.text);
                      }
                    }}
                    autoFocus
                  />
                  {editError && (
                    <span className="text-red-500 text-sm font-black">
                      {editError}
                    </span>
                  )}
                </>
              ) : (
                <div
                  className="border flex-1 flex items-center gap-3 cursor-pointer py-2 hover:bg-blue-900 rounded transition-colors pl-4"
                  onClick={() => handleToggle(todo.id)}
                >
                  {todo.completed ? (
                    <div className="w-4 h-4 border rounded flex items-center justify-center text-gray-500">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.55 15.15L18.025 6.675C18.225 6.475 18.4583 6.375 18.725 6.375C18.9917 6.375 19.225 6.475 19.425 6.675C19.625 6.875 19.725 7.11267 19.725 7.388C19.725 7.66333 19.625 7.90067 19.425 8.1L10.25 17.3C10.05 17.5 9.81667 17.6 9.55 17.6C9.28333 17.6 9.05 17.5 8.85 17.3L4.55 13C4.35 12.8 4.254 12.5627 4.262 12.288C4.27 12.0133 4.37433 11.7757 4.575 11.575C4.77567 11.3743 5.01333 11.2743 5.288 11.275C5.56267 11.2757 5.8 11.3757 6 11.575L9.55 15.15Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-4 h-4 border rounded"></div>
                  )}
                  <span
                    className={
                      todo.completed ? "line-through text-gray-500" : ""
                    }
                  >
                    {todo.text}
                  </span>
                </div>
              )}

              {/* Buttons */}
              {editId === todo.id ? (
                <div className="flex gap-2 items-center">
                  <button
                    className="cursor-pointer bg-green-700 text-white py-2 px-3 rounded hover:bg-green-800 transition-colors"
                    onClick={() => handleSaveEdit(todo.id)}
                  >
                    Save
                  </button>
                  <button
                    className="cursor-pointer bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600 transition-colors"
                    onClick={() => handleCancelEdit(todo.text)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <button
                    className="cursor-pointer bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600 transition-colors"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="cursor-pointer bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleStartEdit(todo.id, todo.text)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
