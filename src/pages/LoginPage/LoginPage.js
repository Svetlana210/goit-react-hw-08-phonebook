import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

// const LoginPage = () => {
//   const isLogin = useSelector(isUserLogin);

//   const dispatch = useDispatch();
//   const handleLogin = data => {
//     dispatch(login(data));
//   };
//   if (isLogin) {
//     return <Navigate to="/contacts" />;
//   }
//   return (
//     <div>
//       <h1>LoginPage</h1>
//       <LoginForm onSubmit={handleLogin} />
//     </div>
//   );
// };

// export default LoginPage;

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);

  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1>LoginPage</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
