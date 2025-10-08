import { Calendar, Check, Edit3, Trash2 } from "lucide-react";
import React from "react";

const TodoItem = () => {
  return (
    <div className={` group p-4 hover:bg-gray-100 transition-all duration-200`}>
      <div className="flex items-start gap-3">
        <button className=" flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center translate-all duration-200 mt-0.5">
          <Check size={14} />
        </button>
        <div className=" flex-1 min-w-0">
          <div className={` text-gray-800 leading-relaxed`}></div>
          <div className=" flex items-center gap-4 mt-2 text-xl text-gray-600 ">
            <div className="flex items-center gap-1">
              <Calendar size={12}/>
<span>Created at</span>
            </div>
<span>Update</span>
          </div>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <button className="p-2 text-gray-500 hover:text-gray-800  hover:bg-gray-200 rounded-lg transition-all duration-200 ">
            <Edit3 size={16}/>
          </button>
          <button className="p-2 text-gray-500 hover:text-red-500  hover:bg-gray-200 rounded-lg transition-all duration-200 ">
            <Trash2 size={16}/>
          </button>
            
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
