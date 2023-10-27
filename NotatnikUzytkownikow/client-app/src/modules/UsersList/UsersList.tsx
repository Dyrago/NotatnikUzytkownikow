import React from "react"
import { User } from "../../models/User"
import axios from "axios"

interface Props{
    users : User[]
    handleEditMode: () => void
    handleSetUserToEdit: (id: number) => void
    getNewData: () => void
}

export default function UserList({users, handleSetUserToEdit, getNewData}: Props){

    async function handleDelete(id :number){
        await axios.delete(`https://localhost:5000/api/Users/${id}`)
        getNewData()
    }

    if(users.length > 0)
    return (
        <div className="usersList">
            <table>
                <thead>
                <tr className="thead">
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Gender</th>
                    <th>Date of birth</th>
                    <th>Phone number</th>
                </tr>
                </thead>
                <tbody>
            {users.map((user) =>
                <tr className="tDataRow" key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.dateOfBirth}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                        <button onClick={() => handleSetUserToEdit(user.id)} className="btn infoBtn tBtn">Edit</button>
                        <button onClick={() => handleDelete(user.id)} className="btn cancelBtn">Delete</button>
                    </td>
                </tr>
            )} 
                </tbody>
                </table>
             
                
        </div>
    )
    else
        return(
        <div className="annotation">
            <h3>No user data to display.</h3>
        </div>)

}