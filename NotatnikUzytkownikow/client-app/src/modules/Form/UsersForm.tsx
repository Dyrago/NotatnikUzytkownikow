import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { User } from "../../models/User"
import axios from "axios"

interface Props{
    createMode: boolean
    editMode: boolean
    handleFormClose: () => void
    userToEdit: User | undefined
    setEditMode: (value: React.SetStateAction<boolean>) => void
    setCreateMode: (value: React.SetStateAction<boolean>) => void
    getNewData: () => void
}

export default  function UsersForm({createMode, editMode, userToEdit, handleFormClose, setCreateMode, setEditMode, getNewData}:Props){

    const initialData = {
        name: '',
        lastName: '',
        dateOfBirth: '',
        gender: 'Female',
        phoneNumber: ''
    }

    const [editUser, setEditUser] = useState(() => userToEdit);
    const [userToCreate, setUserToCreate] = useState(() => initialData)

    useEffect(() => setEditUser(userToEdit), [userToEdit])

    function handleOnChangeEdit(event : ChangeEvent<HTMLInputElement | HTMLSelectElement>)
    {
        let name = event?.target.name;
        let value = event.target.value;

        setEditUser((prev : any) => {
            return {...prev, [name]: value}
        })
    }

    function handleOnChangeCreate(event : ChangeEvent<HTMLInputElement | HTMLSelectElement>)
    {
        let name = event?.target.name;
        let value = event.target.value;

        setUserToCreate((prev : any) => {
            return {...prev,  [name]: value}
        })
    }

    async function handleCreate(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        await axios.post<User>('https://localhost:5000/api/Users', userToCreate)

        setCreateMode(prev => prev = false)
        getNewData()
    }

    async function handleEdit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        await axios.put<User>(`https://localhost:5000/api/Users/${editUser?.id}`, editUser)

        setEditMode(prev => prev = false)
        getNewData()
    }

   if(createMode) return(
        <form className="formBox" onSubmit={handleCreate}>
            <input type="text" name="name" placeholder="Name" onChange={handleOnChangeCreate} maxLength={50} required/>
            <input type="text" name="lastName" placeholder="Second Name" onChange={handleOnChangeCreate} maxLength={150} required/>
            <select name="gender" onChange={handleOnChangeCreate}>
                <option>Female</option>
                <option>Male</option>
            </select>
            <input type="date" name="dateOfBirth" onChange={handleOnChangeCreate} required/>
            <input type="text" name="phoneNumber" placeholder="111222333" onChange={handleOnChangeCreate} minLength={9} maxLength={9}/>
            <input type="submit" className="btn createBtn" value="Create" />
            <button onClick={handleFormClose} className="btn cancelBtn">Cancel</button>
        </form>
    )
    if (editMode) return(
        <form className="formBox" onSubmit={handleEdit}>
            <input type="text" placeholder="Name" name="name" value={editUser?.name} onChange={handleOnChangeEdit} maxLength={50}/>
            <input type="text" placeholder="Second Name" name="lastName" value={editUser?.lastName} onChange={handleOnChangeEdit} maxLength={150}/>
            <select name="gender" value={editUser?.gender} onChange={handleOnChangeEdit}>
                <option>Female</option>
                <option>Male</option>
            </select>
            <input type="date" name="dateOfBirth" value={editUser?.dateOfBirth} onChange={handleOnChangeEdit} required/>
            <input type="text" name="phoneNumber" placeholder="111222333" value={editUser?.phoneNumber} onChange={handleOnChangeEdit} minLength={9} maxLength={9}/>
            <input type="submit" className="btn createBtn" value="Edit" />
            <button onClick={handleFormClose} className="btn cancelBtn">Cancel</button>
        </form>)

}