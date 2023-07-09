import React from 'react'
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/solid";


function Todolist({text,updateMode,deleteTodo}) {
  return (
    <>
 <div class="flex flex-row gap-2 bg-blue-100 w-[350px] shadow-sm rounded p-4">
          <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
          <BookmarkIcon className="h-6 w-6 text-blue-500" />
          </div>
          <div class="flex item-center  ml-4">
            <div className="">  <div class="text-sm text-gray-500"> Title </div>

            <div className="flex "> <div class="font-bold mr-10 flex-1 text-lg">{text}</div> 
            <div className="flex gap-3 justify-end">  <button class="btn btn-blue" onClick={deleteTodo}>
              <TrashIcon className="h-5 w-5 text-gray-500" />
              </button>
              <button class="btn btn-blue" onClick={updateMode}>
          
              <PencilSquareIcon className="h-5 w-5 text-gray-500" />
              </button></div></div></div>
           
         
          
          </div>
        </div>


  
   
    </>
  )
}

export default Todolist