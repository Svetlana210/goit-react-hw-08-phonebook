import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// import ContactsPage from 'pages/ContactsPage';
import Navbar from './Navbar/Navbar';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
