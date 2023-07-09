import React from 'react'
import { UsersIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
function LeftBar() {
  return (
    <div className='bg-teal-600 hidden pt-[5rem] sm:flex flex-col items-center xl:items-start xl:w-[220px] p-2 fixed h-full  pr-0 xl:pr-8 z-[2]'>
    <div className='text-[50px] text-white'>ToDo</div>

    <div className="flex flex-col p-8 gap-8 text-white">
      <div className="flex gap-3 cursor-pointer"><UsersIcon className="h-6 w-6 text-gray-100" />Profile</div>
      <div className="flex gap-3 cursor-pointer"><DocumentTextIcon  className="h-6 w-6 text-gray-100" />setting</div>
      <div className="flex gap-3 cursor-pointer"><Cog6ToothIcon className="h-6 w-6 text-gray-100" />Reward</div>
      <div className="flex gap-3 cursor-pointer"><ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-100" />Log in</div>
      
    </div>
    </div>
  )
}

export default LeftBar