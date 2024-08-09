import { Pencil } from 'lucide-react'
import React from 'react'

const UserIcon = ({ url, stroy, add, edit}) => {
  return (
    <div
      className='relative w-16 h-16'>
      <img
        src={url ? url : "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt="user icon"
        className={`inline-block h-16 w-16 rounded-full ring-2 ring-white object-center ${stroy ? "border-[3px] border-light-purple p-0.5" : ""}`}
      />
      {add === "purple" ? (
        <button
          className='w-7 h-7 bg-light-purple rounded-full text-primary font-semibold text-[26px] absolute bottom-[0px] right-[-6px] border-[3px] border-primary flex items-center justify-center'
        >
          <span className='mb-1'>+</span>
        </button>
      )
        : add === "light" ? (
          <button
            className='w-7 h-7 bg-button-anti-flash-light rounded-full text-text font-semibold text-[26px] absolute bottom-[0px] right-[-6px] border-[3px] border-primary flex items-center justify-center'
          >
            <span className='mb-1'>+</span>
          </button>
        ) : ""}
        {
          edit ? (
            <div
            className='w-5 h-5 cursor-pointer bg-gray-500 rounded-full text-white font-semibold text-[26px] absolute bottom-[0.6px] left-[20px] border-[1.5px] border-white flex items-center justify-center'
          >
            <Pencil className='w-3 h-3'/>
          </div>
          ) : ''
        }

    </div>
  )
}

export default UserIcon