import styles from './login-form.module.css';
import fields from './fields';
import initialState from './initialState';
import useForm from '../../shared/hooks/useForm';
import Button from '../../shared/component/Button/Button';
import TextField from '../../shared/component/TextField/TextField';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Log in</Button>
    </form>
  );
};

export default LoginForm;
