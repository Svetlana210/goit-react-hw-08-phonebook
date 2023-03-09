import styles from './login-form.module.css';
import { useState } from 'react';

const initialState = {
  email: '',
  password: '',
};
const LoginForm = ({ onSubmit }) => {
  const [state, setstate] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setstate(initialState);
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setstate(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span className={styles.span}>Email</span>
        <input
          type="email"
          name="email"
          value={state.email}
          required
          placeholder="user email"
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.span}>Password</span>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          placeholder="user password"
          onChange={handleChange}
        />
      </label>
      <button className={styles.btn} type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
