import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';

import RegistrationForm from '../../components/RegistartionForm/RegistrationForm.jsx';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <RegistrationForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
