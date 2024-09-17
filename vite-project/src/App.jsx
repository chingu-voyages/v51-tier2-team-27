import { useState } from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import CreateGroup from './components/CreateGroup';

function App() {
  const [addGroupModalIsOpen, setAddGroupModalIsOpen] = useState(true);

  return (
    <>  
    <HomeScreen />  
    <CreateGroup
    addGroupModalIsOpen={addGroupModalIsOpen}
    />      
    </>
  )
}

export default App
