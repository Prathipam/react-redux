import { useAppDispatch } from '../../hooks/redux-hooks'
import { createUser } from '../../store/user-actions'
import { SyntheticEvent, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

const UserCreate = () => {
  const dispatch = useAppDispatch()
  const [redirect, setRedirect] = useState(false)
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const user = {
      id: nanoid(),
      name,
      username,
      email,
      phone,
    }
    dispatch(createUser(user))
    window.alert('User created successfully')
    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to="/users" />
  }

  return (
    <form onSubmit={submit}>
      <div className="m-3">
        <label>Name</label>
        <input
          className="form-control"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="m-3">
        <label>UserName</label>
        <input
          className="form-control"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="m-3">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="m-3">
        <label>Phone Number</label>
        <input
          className="form-control"
          type="phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="m-3">
        <button className="btn btn-primary">Save</button>&nbsp;&nbsp;
        <Link className="btn btn-secondary" to={'/users'}>
          Cancel
        </Link>
      </div>
    </form>
  )
}
export default UserCreate
