import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

type Props = {
    title: string
}

function Navbar(props:Props)
{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page" >Counter</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/SearchForm" className="nav-link" >SearchForm</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/GenreSelect" className="nav-link" >GenreSelect</NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              
            </div>
          </div>
        </nav>
          {/* <Counter message='The count value is' ></Counter>
          <SearchForm></SearchForm>
          <GenreSelect></GenreSelect> */}
       </>
      )
}

// Navbar.propTypes = {
//     title: PropTypes.string
// }

export default Navbar;