import { User } from "../models/User"
import UsersForm from "./Form/UsersForm"
import UserList from "./UsersList/UsersList"

interface Props {
    users: User[]
    createMode : boolean
    editMode : boolean
    userToEdit: User | undefined
    handleEditMode: () => void
    handleFormClose: () => void
    handleSetUserToEdit: (id: number) => void
    setEditMode: (value: React.SetStateAction<boolean>) => void 
    setCreateMode: (value: React.SetStateAction<boolean>) => void
    getNewData: () => void
}

export default function Dashboard({users, userToEdit, createMode, editMode, handleEditMode, handleFormClose, handleSetUserToEdit, setEditMode, setCreateMode, getNewData} : Props){

    return(
        <div className="dashboard">
            <UserList
                users={users}
                handleEditMode = {handleEditMode}
                handleSetUserToEdit = {handleSetUserToEdit}
                getNewData = {getNewData}
            />
            <UsersForm
                createMode = {createMode}
                editMode = {editMode}
                handleFormClose = {handleFormClose}
                userToEdit = {userToEdit}
                setEditMode = {setEditMode}
                setCreateMode = {setCreateMode}
                getNewData = {getNewData}
            />
        </div>
    )
}