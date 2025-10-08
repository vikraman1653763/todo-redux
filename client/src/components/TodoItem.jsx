import { Calendar, Check, Edit3, Trash2 } from "lucide-react";
import React, { useState } from "react";

const TodoItem = ({ todo, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-Us", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };
  return (
    <div
      className={` group p-4 hover:bg-gray-100 transition-all duration-200 ${
        isDeleting
          ? " opacity-0 transform scale-95"
          : "opacity-100 transform scale-100"
      }
    ${todo.completed ? "opacity-75" : ""}
    `}
      style={{
        animationDelay: `${index * 50}ms`,
        animation: "slideInUp 0.3s ease-out forwards",
      }}
    >
      <div className="flex items-start gap-3">
        <button
          className={` flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center translate-all duration-200 mt-0.5 ${
            todo.completed
              ? "bg-green-500 border-green-500 text-white hover:bg-green-600"
              : "border-gray-400 hover:border-green-500 hover:bg-green-500"
          }`}
        >
          <Check size={14} />
        </button>
        <div className=" flex-1 min-w-0">
          <div className={` text-gray-800 leading-relaxed`}></div>
          <div className=" flex items-center gap-4 mt-2 text-xl text-gray-600 ">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>Created {formatDate(todo.createdAt)}</span>
            </div>
            <span>Update {formatDate(todo.updatedAt)}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <button className="p-2 text-gray-500 hover:text-gray-800  hover:bg-gray-200 rounded-lg transition-all duration-200 ">
            <Edit3 size={16} />
          </button>
          <button className="p-2 text-gray-500 hover:text-red-500  hover:bg-gray-200 rounded-lg transition-all duration-200 ">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
