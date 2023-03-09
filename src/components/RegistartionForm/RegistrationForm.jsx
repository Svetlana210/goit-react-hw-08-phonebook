import styles from './registration-form.module.css';
import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
};
const RegistrationForm = ({ onSubmit }) => {
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
        <span className={styles.span}>Name</span>
        <input
          type="text"
          name="name"
          value={state.name}
          required
          placeholder="user name"
          onChange={handleChange}
        />
      </label>
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
        Sign up
      </button>
    </form>
  );
};

export default RegistrationForm;
