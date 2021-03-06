import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./index.css";
import Admin from "./pages/Admin";
import ProductAdmin from "./pages/ProductAdmin";
import Pilot from "./pages/Pilot";
import NotFound from "./pages/NotFound";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Login from "./components/Auth/Login";
import Dashboard from "./pages/Dashboard";
import SidebarAdmin from './pages/SidebarAdmin';
import Equipment from './pages/Equipment';
import { Alerts } from './components/Alerts';
import { Missions } from './components/Missions';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Header />
      <SidebarAdmin />
      <ToastContainer />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/productadmin' element={<ProductAdmin />} />
        <Route path='/pilot' element={<Pilot />} />
        <Route path='/missions/*' element={<Missions />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/alerts/*' element={<Alerts />} />
        <Route path='/' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </QueryClientProvider>
  );};

export {App};