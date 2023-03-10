// import styles from './user-menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { getUser } from '../../../redux/auth/auth-selectors';
const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{email}</p>
      <button type="submit" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};
export default UserMenu;
