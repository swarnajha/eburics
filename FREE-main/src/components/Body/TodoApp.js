import React, { useState ,useEffect} from 'react' 
import {  addToDo, deleteToDo, getAllToDo, updateToDo } from './utils/Api'
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import Todolist from './Todolist';
function TodoApp() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
 


  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  
  
  return (
    <div>
   

      <nav class="font-sans flex flex-col text-center  sm:flex-row sm:text-left sm:justify-between py-1 px-6 
      bg-blue-400  shadow sm:items-baseline w-full mb-10">
  <div class="mb-2 sm:mb-0">
    <a href="/home" class="text-2xl text-white font-medium no-underline text-grey-darkest ">TODO</a>
  </div>
 
</nav>

      <div class="mb-3 w-[30%] m-auto">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out y"
      placeholder="Add todo"
      value={text}
      onChange={(e) => setText(e.target.value)} 
     />

  
    <button
      class="relative z-[2] flex items-center bg-blue-400 hover:bg-blue-300 rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      onClick={isUpdating ?
        () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
        : () => addToDo(text, setText, setToDo)}
      
      >
        {isUpdating ? <ArrowUpOnSquareIcon className="h-6 w-6 text-white-500" /> :  <PlusIcon className="h-6 w-6 text-white" />}
   
    </button>
  </div>
</div>
    <div className="flex overflow-y-auto scroll ">

      <div className="flex flex-col gap-2 m-auto h-[70vh] ">
      {toDo.map((item) => <Todolist
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteTodo = {() => deleteToDo(item._id, setToDo)}
         />
          
          )}
       
       
      </div></div>
    </div>
  )
}

export default TodoApp