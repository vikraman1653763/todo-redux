import { CheckCircle2, Circle, Filter, Plus, Trash2 } from "lucide-react";
import React from "react";
import TodoFilters from "./TodoFilters";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectFilter, selectFilteredTodos, selectIsAddingTodo, selectTodos, selectTodosStats } from "../store/selectors";

const TodoApp = () => {
  const todos = useSelector(selectTodos);
  const filteredTodos = useSelector(selectFilteredTodos);
  const stats = useSelector(selectTodosStats);
  const filter = useSelector(selectFilter);
  const isAddingTodo = useSelector(selectIsAddingTodo)
  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4">
      <div className=" max-w-2xl mx-auto">
        <div className=" text-center mb-8">
          <h1 className=" text-4xl font-bold text-gray-800 mb-2">TodoFlow</h1>
          <p>Organize your life, one task at a time</p>
        </div>
        <div className=" bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-300 shadow-lg">
          <div className=" flex items-center justify-between mb-4">
            <h2 className=" text-lg font-semibold text-gray-800">
              Progress Overview
            </h2>
            <div className=" text-2xl font-bold text-green-600">
              {stats.completionPercentage}%
            </div>
          </div>
          <div className=" w-full bg-gray-300 rounded-full h-3 mb-4">
            <div className=" bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out" style={{width:`${stats.completionPercentage}%`}}></div>
          </div>
          <div className=" grid grid-cols-3 gap-4 text-center">
            <div>
              <div className=" text-2xl font-bold text-gray-800">{stats.total}</div>
              <div className=" text-sm text-gray-800">Total</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{stats.active}</div>
              <div className=" text-sm to-gray-800">Active</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{stats.completed}</div>
              <div className=" text-sm to-gray-800">Completed</div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-b-2xl border border-gray-300 shadow-lg overflow-hidden">
          <div className=" p-6 border-b border-gray-300">
            <div className=" flex items-center justify-between mb-4">
              <button className=" flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer">
                <Plus size={20} /> Add Todo
              </button>


             {stats.total>0 &&(
               <div className=" flex items-center gap-2">
                {stats.completed >0 &&(<button className=" flex items-center gap-3 text-red-600 hover:text-red-700 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors duration-200 text-sm">
                  <Trash2 size={16} /> Clear Completed
                </button>)}
                {stats.active>0 && (
                  <button className=" flex items-center gap-3 text-green-600 hover:text-green-600 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors duration-200 text-sm">
                  <CheckCircle2 size={16} />
                  Mark All Completed
                </button>
                )}
              </div>
             )}
            </div>

            <TodoFilters currentFilter ={filter} stats={stats} />
          </div>
          {isAddingTodo &&(
            <div className=" p-6 border-b border-gray-300 bg-gray-100">
            <TodoForm />
          </div>
          )}

          <div className=" max-h-96 overflow-y-auto">
            <div className=" p-12 text-center">
              <div className=" text-gray-600">
                <Circle size={48} className=" mx-auto mb-4 opacity-50" />
                <p className=" text-lg font-medium mb-2 text-gray-800">
                  No Todos Yet
                </p>
                <p>Add your todo to get started</p>
              </div>
              <div className=" text-gray-600">
                <Filter size={48} className=" mx-auto mb-4 opacity-50" />
                <p className=" text-lg font-medium mb-2 text-gray-800">
                  No Filter Todos
                </p>
                  <TodoItem />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center mt-6 text-sm text-gray-700">Footer</div>
      </div>
    </div>
  );
};

export default TodoApp;
