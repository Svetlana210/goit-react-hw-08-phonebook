// import styles from './user-menu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { getUser } from '../../../redux/auth/auth-selectors';
const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{name}</p>
      <button type="submit" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};
export default UserMenu;
