import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import EventHandler from './components/EventHandler'
import Form from './components/Form'

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Vincent",
      hobby: "Coding"
    },
    {
      id: 2,
      name: "Ncent",
      hobby: "Makan"
    },
    {
      id: 3,
      name: "Admin",
      hobby: "Sleep"
    }
  ])

  return (
    <>
      {/* <Login /> */}
      {/* <ul>
        {
          profiles.map(profile => (
            <Profile profile={profile} />
          ))
        }
      </ul> */}
      {/* <EventHandler /> */}

      <h1>Welcome to Homepage</h1>
      <h4>Login</h4>
      <Form />
    </>
  )
}

export default App
