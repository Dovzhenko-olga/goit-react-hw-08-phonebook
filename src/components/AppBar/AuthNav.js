import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/goit-react-hw-08-phonebook/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/goit-react-hw-08-phonebook/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}