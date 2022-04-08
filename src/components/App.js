import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './organisms/layout';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<h1>Loadig...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={isLoggedIn ? <HomePage /> : <RegisterPage />}
          />
          <Route
            path="login"
            element={isLoggedIn ? <HomePage /> : <LoginPage />}
          />
          <Route
            path="contacts"
            element={isLoggedIn ? <ContactsPage /> : <Navigate to="/login" />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
