import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {URL_NAVIGATION} from "../../../../config/constants";

const NavBar = () => {
  const [links, setLinks] = useState([
    { url: '/movies', label: 'Movies' },
    { url: '/groceries', label: 'Groceries' },
    { url: '/resume', label: 'Resume' }
  ])

  useEffect(() => {
    axios.get(URL_NAVIGATION).then(response => {
      setLinks([...links, ...response.data])
    })
  }, [])

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        { links.map(link => (
          <li className="nav-item active" key={link.url}>
            <Link to={link.url} className="nav-link">{link.label}</Link>
          </li>
        )) }
      </ul>
    </nav>
  )
}

export default NavBar;
