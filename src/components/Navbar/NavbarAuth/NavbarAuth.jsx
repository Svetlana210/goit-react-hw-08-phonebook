import { NavLink } from 'react-router-dom';
import styles from './navbar-auth.module.css';

const NavbarAuth = () => {
  const getFullName = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  };
  return (
    <div>
      <NavLink to="/register" className={getFullName}>
        Register
      </NavLink>
      <NavLink to="/login" className={getFullName}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
