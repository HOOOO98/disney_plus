import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path='main' element={<MainPage />} />
        <Route path=':movieId' element={<DetailPage />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
    </Routes>
  )

    ;
}

export default App;
