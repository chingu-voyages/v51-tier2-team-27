import { useState } from 'react'
import './App.css'
import CreateGroup from './components/CreateGroup';


function App() {
  const [addGroupModalIsOpen, setAddGroupModalIsOpen] = useState(true);

  return (
    <>  
    <CreateGroup
    addGroupModalIsOpen={addGroupModalIsOpen}
    />    
    </>
  )
}

export default App
