import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return(
  <nav>
    <NavLink to="/goit-react-hw-08-phonebook"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

  {isLoggedIn && (
    <NavLink
      to="/goit-react-hw-08-phonebook/contacts"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Phonebook
    </NavLink>
)}
    
  </nav>
);
}

export default Navigation;