import { useState, useEffect } from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import CreateGroup from './components/CreateGroup';
import DisplayGroupList from './components/DisplayGroupList'


function App() {
  const [addGroupModalIsOpen, setAddGroupModalIsOpen] = useState(true);
  const [groupsData, setGroupsData] = useState(/* () => JSON.parse(localStorage.getItem('FairShare_groupsData')) ||  */
    [
      {
          groupId: 1,
          groupName: "test1",
          groupDescription: "test est eatoiehtapoehgpauehg",
          groupBudget: 2000,
          groupMembers: [
            {
              name: "person's name",
              avatar: "path to avatar image",
              id: 1
            },
            {
              name: "tony the tiger",
              avatar: "path to avatar image2",
              id: 2
            }
          ]
      },
      {
          groupId: 2,
          groupName: "test2",
          groupDescription: "test est eatoiehtapoehgpauehg",
          groupBudget: 1000,
          groupMembers: [
            {
              name: "jane doe",
              avatar: "path to avatar image",
              id: 4
            },
            {
              name: "team member 2",
              avatar: "path to avatar image2",
              id: 5
            },
            {
              name: "frankie frank",
              avatar: "path to avatar image4",
              id: 6
            }
          ]
      }
    ]);
  
  
  
    /* useEffect(() => {
      localStorage.setItem('FairShare_groupsData', JSON.stringify(groupsData));
    }, [groupsData]); */
  
    function openAddGroupModal() {
      setAddGroupModalIsOpen(true);
    }

    function addGroup(group) {
      setGroupsData(prevData => [...prevData, group]);
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
    />   
    </>
  )
}

export default App
