import { useAppDispatch } from '../../hooks/redux-hooks'
import { updateUser } from '../../store/user-actions'
import { SyntheticEvent, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserService from '../../service/userService'

const UserEdit = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams() as { id: string }

  const [redirect, setRedirect] = useState(false)
  const [userId, setUserId] = useState('')
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    ;(async () => {
      const data = await UserService.getUser(id)

      setUserId(data.id)
      setName(data.name)
      setUserName(data.username)
      setEmail(data.email)
      setPhone(data.phone)
    })()
  }, [id])

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const user = {
      id: userId,
      name,
      username,
      email,
      phone,
    }
    dispatch(updateUser(userId, user))
    window.alert('User updated successfully')
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
export default UserEdit
