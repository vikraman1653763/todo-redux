import { Calendar, Check, Edit3, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoCompleted, updateTodoText } from "../store/todoSlice";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const handleToggle = () => dispatch(toggleTodoCompleted(todo.id));

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => dispatch(deleteTodo(todo.id)), 180);
  };

  const handleEditSave = () => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== todo.text) {
      dispatch(updateTodoText({ id: todo.id, text: trimmed }));
    }
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setDraft(todo.text);
    setIsEditing(false);
  };

  return (
    <div
      className={`group p-4 hover:bg-gray-100 transition-all duration-200 ${
        isDeleting ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
      } ${todo.completed ? "opacity-75" : ""}`}
      style={{
        animationDelay: `${index * 50}ms`,
        animation: "slideInUp 0.3s ease-out forwards",
      }}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={handleToggle}
          aria-label={todo.completed ? "Mark as active" : "Mark as completed"}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-0.5 ${
            todo.completed
              ? "bg-green-500 border-green-500 text-white hover:bg-green-600"
              : "border-gray-400 hover:border-green-500 hover:bg-green-500"
          }`}
        >
          {todo.completed &&
          (
            <Check size={16} color="white" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          {!isEditing ? (
            <div className={`text-gray-800 leading-relaxed break-words `}>
              {todo.text}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                maxLength={500}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEditSave();
                  if (e.key === "Escape") handleEditCancel();
                }}
              />
              <button
                onClick={handleEditSave}
                className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={handleEditCancel}
                className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          )}

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>Created {formatDate(todo.createdAt)}</span>
            </div>
            <span>Updated {formatDate(todo.updatedAt)}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-all duration-200"
            aria-label="Edit todo"
          >
            <Edit3 size={16} />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-200 rounded-lg transition-all duration-200"
            aria-label="Delete todo"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
