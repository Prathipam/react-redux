import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { fetchUsers, deleteUser as dUser } from '../../store/user-actions'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserModel } from '../../models/user-model'
import Pagination from '../../components/Pagination'

const Users = (props: any) => {
  const [sort, setSort] = useState('name')
  const [order, setOrder] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()
  const allUsers = useAppSelector((state) => state.user.all_users)

  useEffect(() => {
    dispatch(fetchUsers(search, sort, order))
  }, [dispatch, search, sort, order])

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentPosts = allUsers.slice(indexOfFirstUser, indexOfLastUser)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const deleteUser = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(dUser(id))
    }
  }
  const sortClick = (key: string) => {
    setSort(key)
    order === 'asc' ? setOrder('desc') : setOrder('asc')
  }

  const checkUsers = (): boolean => {
    if (allUsers.length === 0) {
      return false
    }
    return true
  }

  return (
    <>
      <div className="row">
        <div className="col-6 my-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-4 my-3">
          <Link to={'/users/create'} className="btn btn-primary">
            Create User
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">
                <button
                  className="btn btn-link"
                  style={{ textDecoration: 'none', color: '#525252' }}
                  onClick={() => sortClick('id')}
                >
                  #
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-link"
                  style={{ textDecoration: 'none', color: '#525252' }}
                  onClick={() => sortClick('name')}
                >
                  Name
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-link"
                  style={{ textDecoration: 'none', color: '#525252' }}
                  onClick={() => sortClick('username')}
                >
                  UserName
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-link"
                  style={{ textDecoration: 'none', color: '#525252' }}
                  onClick={() => sortClick('email')}
                >
                  Email
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-link"
                  style={{ textDecoration: 'none', color: '#525252' }}
                  onClick={() => sortClick('phone')}
                >
                  Phone
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-link"
                  style={{ textDecoration: 'none', color: '#525252' }}
                >
                  Actions
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {checkUsers() ? (
              currentPosts.map((user: UserModel) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <div className="btn-group mr-2">
                        <LinkContainer to={`/users/edit/${user.id}`}>
                          <Button variant="success" className="btn-sm">
                            <i className="fas fa-edit" />
                          </Button>
                        </LinkContainer>
                        &nbsp;&nbsp;
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteUser(user.id)}
                        >
                          <i className="fas fa-trash" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center' }}>
                  No record found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {checkUsers() && (
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={allUsers.length}
          paginate={paginate}
        />
      )}

      {/*<nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={previous}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={next}>
              Next
            </a>
          </li>
        </ul>
          </nav>*/}
    </>
  )
}

export default Users
