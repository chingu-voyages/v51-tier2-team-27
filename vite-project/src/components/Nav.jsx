import React from 'react'
import logo from '../assets/logo.png'

export default function Nav(props) {

    if (!props.addGroupModalIsOpen) {
        return (
            <div className='flex flex-col col-span-1 bg-teal p-4'>
              <img src={logo} className=''/> 
              <p>Start sharing expenses easily with FairShare!</p>
              <button>Groups</button>
              <button>Expenses</button>
              <button>Analytics</button>
            </div>
          )
    }
  
}
