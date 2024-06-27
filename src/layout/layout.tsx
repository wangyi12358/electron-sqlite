import React, { useEffect, useState } from 'react'

export interface LayoutProps {}

const fetch = window.electron.fetch || window.fetch

export const Layout: React.FC<LayoutProps> = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {}, [])

  function getUserList() {
    console.log('fetching users')
    fetch('/user', {
      method: 'GET'
    })
      .then((e) => e.text())
      .then(console.log)
  }

  function addUser() {
    console.log('adding user')
    fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'John Doe'
      })
    })
      .then((e) => e.text())
      .then(console.log)
  }

  return (
    <div>
      <h1>Layout</h1>
      <button onClick={addUser}>Add User</button>
      <button style={{ marginLeft: 16 }} onClick={() => getUserList()}>
        Fetch Users
      </button>
    </div>
  )
}
