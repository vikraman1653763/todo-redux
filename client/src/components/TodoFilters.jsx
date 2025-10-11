import { CheckCircle, Clock, List } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/todoSlice";

const TodoFilters = ({ currentFilter, stats }) => {
  const dispatch = useDispatch();

  const filters = [
    { key: "all", label: "All", icon: List, count: stats.total },
    { key: "active", label: "Active", icon: Clock, count: stats.active },
    { key: "completed", label: "Completed", icon: CheckCircle, count: stats.completed },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex bg-gray-200 rounded-lg p-1">
        {filters.map(({ key, label, icon: Icon, count }) => (
          <button
            key={key}
            onClick={() => dispatch(setFilter(key))}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              currentFilter === key
                ? "bg-white text-gray-800 shadow-md"
                : "text-gray-700 hover:text-gray-800 hover:bg-gray-300"
            }`}
            aria-pressed={currentFilter === key}
          >
            <Icon size={16} />
            <span>{label}</span>
            <span className="text-xs opacity-80">{count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoFilters;
