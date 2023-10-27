import React from "react"

interface Props{
    handleCreateMode: () => void 
}

export default function Header ({handleCreateMode}:Props){
    return (
        <header className="header">
            <div className="headerTitle">
                <h1>&lt;UsersNote&#47;&gt;</h1>
            </div>
            <div className="headerChunk">
                <button onClick={handleCreateMode} className="btn createBtn">Create</button>
            </div>
        </header>
    )
}