import { useEffect, useState } from 'react'
import "./css/index.css"
import Header from './layouts/Header'
import Dashboard from './modules/Dashboard'
import { User } from './models/User'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState<User[]>(() => []);
  const [createMode, setCreateMode] = useState(() => false);
  const [editMode, setEditMode] = useState(() => false);
  const [userToEdit, setUserToEdit] = useState<User | undefined>();

  useEffect(() => {
    axios.get('https://localhost:5000/api/Users')
    .then(response => {
      setUsers(prev => prev = response.data)
    })
  }, [])

  function HandleCreateMode(){
      setCreateMode(prev => prev = true)
      setEditMode(prev => prev = false)
  }

  function HandleEditMode(){    
    setEditMode(prev => prev = true)
    setCreateMode(prev => prev = false)
  }

  function HandleFormClose(){
    setEditMode(prev => prev = false)
    setCreateMode(prev => prev = false)
  }

  function HandleSetUserToEdit(id: number){
    setUserToEdit(prev => prev = users.find(user => user.id === id));
    console.log(userToEdit)
    HandleEditMode();
  }

  async function GetNewData() {
    await axios.get('https://localhost:5000/api/Users')
    .then(response => {
      setUsers(prev => prev = response.data)
    });
}

  return (
    <div className='container'>
      <Header
        handleCreateMode = {HandleCreateMode}
       />
      <Dashboard 
        users = {users}
        createMode = {createMode}
        editMode = {editMode}
        handleEditMode = {HandleEditMode}
        handleFormClose = {HandleFormClose}
        handleSetUserToEdit={HandleSetUserToEdit}
        userToEdit = {userToEdit}
        setEditMode = {setEditMode}
        setCreateMode = {setCreateMode}
        getNewData = {GetNewData}
      />
    </div>
  )
}

export default App
