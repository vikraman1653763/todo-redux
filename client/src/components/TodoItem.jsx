import { Check } from 'lucide-react'
import React from 'react'

const TodoItem = () => {
  return (
    <div className={` group p-4 hover:bg-gray-100 transition-all duration-200`}>
        <div className='flex items-start gap-3'>
            <button className=' flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center translate-all duration-200 mt-0.5'>
                <Check size={14}/>
            </button>
        </div>
    </div>
  )
}

export default TodoItem
