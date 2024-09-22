import { useState, useEffect } from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import CreateGroup from './components/Groups/CreateGroup';
import DisplayGroupList from './components/Groups/DisplayGroupList'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  const [addGroupModalIsOpen, setAddGroupModalIsOpen] = useState(false);
  const [groupsData, setGroupsData] = useState(() => JSON.parse(localStorage.getItem('FairShare_groupsData')) || []); 
  const [navSelect, setNavSelect] = useState(() => JSON.parse(localStorage.getItem('FairShare_navSelect')) || 'groups');
  
  useEffect(() => {
    localStorage.setItem('FairShare_groupsData', JSON.stringify(groupsData));
  }, [groupsData]);

  function openAddGroupModal() {
    setAddGroupModalIsOpen(true);
  }

  function closeAddGroupModal() {
    setAddGroupModalIsOpen(false);
  }

  function addGroup(e, group) {
    e.preventDefault();
    setGroupsData([...groupsData, group]);
    setAddGroupModalIsOpen(false);
  }

  function deleteGroup(id) {
    setGroupsData(prevGroupsData => {
      const newGroupsData = prevGroupsData.filter(
        item => item.groupId !== id
      )
      return newGroupsData;
    })
  }
   
  

  return (
    <>  
    {/* <HomeScreen />   */}
    <Nav 
    addGroupModalIsOpen={addGroupModalIsOpen}
    />
    <CreateGroup
    addGroupModalIsOpen={addGroupModalIsOpen}
    addGroup={addGroup}
    closeAddGroupModal={closeAddGroupModal}
    />   
    <DisplayGroupList
    groupsData={groupsData}
    setGroupsData={setGroupsData}
    openAddGroupModal={openAddGroupModal}
    deleteGroup={deleteGroup}
    addGroupModalIsOpen={addGroupModalIsOpen}
    />
    {/* <Footer /> */}
    </>
  )
}

export default App
