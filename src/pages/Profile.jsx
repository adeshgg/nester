import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const auth = getAuth()
  // we are setting the values in the state initially since, we won't be able to access the profile page if we are not logged in. So the useState will run only when we have a valid user
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const { name, email } = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <>
      <div className='profile'>
        <header className='profileHeader'>
          <p className='pageHeader'>My Profile</p>
          <button className='logOut' onClick={onLogout}>
            Logout
          </button>
        </header>
      </div>
    </>
  )
}
