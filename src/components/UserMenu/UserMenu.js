import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import styles from './UserMenu.module.css';
import defaultAvatar from './panda.jpg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <div className={styles.user}>
      <img src={avatar} alt="avatar" width="32" className={styles.avatar} />
        <span className={styles.name}>Welcome, {name}.</span>
      </div>
      <button className={styles.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}