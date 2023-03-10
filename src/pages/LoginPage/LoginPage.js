import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
