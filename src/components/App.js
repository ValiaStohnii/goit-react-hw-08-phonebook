import { Routes, Route } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Layout from './organisms/layout';
import ContactsPage from 'pages/ContactsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
