import React from 'react'
import logo from '../assets/logo.png'

export default function Nav(props) {

    if (!props.addGroupModalIsOpen) {
        return (
            <div className='flex flex-col col-span-2 bg-teal p-4 items-center'>
              <img src={logo} className=''/> 
              <p className='my-10'>Start sharing expenses easily with FairShare!</p>
              <button className='my-10  bg-beige text-button w-5/6 py-2'>Groups</button>
              <button className=' bg-beige text-button w-5/6 py-2'>Expenses</button>
              <button  className='my-10 bg-beige text-button w-5/6 py-2'>Analytics</button>
            </div>
          )
    }
  
}
