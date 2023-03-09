import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import RegistrationForm from '../../components/RegistartionForm/RegistrationForm.jsx';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);

  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1>RegisterPage</h1>
      <RegistrationForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
