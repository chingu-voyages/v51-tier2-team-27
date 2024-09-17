import { useState, useEffect } from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import CreateGroup from './components/CreateGroup';
import DisplayGroupList from './components/DisplayGroupList'


function App() {
  const [addGroupModalIsOpen, setAddGroupModalIsOpen] = useState(false);
  const [groupsData, setGroupsData] = useState(() => JSON.parse(localStorage.getItem('FairShare_groupsData')) || []); 
  
  
  useEffect(() => {
    localStorage.setItem('FairShare_groupsData', JSON.stringify(groupsData));
  }, [groupsData]);

  function openAddGroupModal() {
    setAddGroupModalIsOpen(true);
  }

  function addGroup(e, group) {
    e.preventDefault();
    setGroupsData([...groupsData, group]);
    setAddGroupModalIsOpen(false);
  }

  function clearAllGroups() {
    setGroupsData([]);
  }

   

  return (
    <>  
    <HomeScreen />  
    <CreateGroup
    addGroupModalIsOpen={addGroupModalIsOpen}
    addGroup={addGroup}
    />   
    <DisplayGroupList
      groupsData={groupsData}
      openAddGroupModal={openAddGroupModal}
      clearAllGroups={clearAllGroups}
    />   
    </>
  )
}

export default App
