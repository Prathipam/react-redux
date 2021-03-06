import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span data-feather="home" className="align-text-bottom"></span>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              <span data-feather="home" className="align-text-bottom"></span>
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Menu
