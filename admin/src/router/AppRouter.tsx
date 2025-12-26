import { Routes, Route } from 'react-router';
import App from '../App';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SignUp from '@/pages/Sign-up';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
