import styles from './registration-form.module.css';
import initialState from './initialState';
import fields from './fields';
import Button from '../../shared/component/Button/Button';
import TextField from '../../shared/component/TextField/TextField';
import useForm from '../../shared/hooks/useForm';

const RegistrationForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Sign up</Button>
    </form>
  );
};

export default RegistrationForm;
