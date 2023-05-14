import Home from 'src/views/client/Home';
import About from 'src/views/client/About';
import Search from 'src/views/client/Search';
import Publications from 'src/views/client/Publications';

import AddView from 'src/views/dashboard/AddView';
import AdminSearchView from 'src/views/dashboard/SearchView';
import BackupView from 'src/views/dashboard/BackupView';
import EditView from 'src/views/dashboard/EditView';
import TeamView from 'src/views/dashboard/TeamView';
import DashView from 'src/views/dashboard/DashView';
import AddFungo from 'src/components/dashboard/forms/add/AddFungo';
import AddExtrato from 'src/components/dashboard/forms/add/AddExtrato';
import AddMicoteca from 'src/components/dashboard/forms/add/AddMicoteca';
import LoginView from 'src/views/dashboard/Login';
import SignupView from 'src/views/dashboard/Signup';
import AdminDash from 'src/views/dashboard/AdminDash';

import { useAuth } from 'src/context/UserContext';

import {
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from 'react';

export function NavRouter() {
  return(
    <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
        </Route>
        <Route path="/search" element={<Search/>}/>
        <Route path="/publications" element={<Publications/>} />
        <Route path="/about" element={<About/>}/>
        <Route element={<ProtectRoutes/>}>
          <Route path="/admin/*" element={<AdminDash/>}>
            <Route index element={<DashView/>}/>
            <Route path="search" element={<AdminSearchView/>}/>
            <Route path="add">
              <Route index element={<AddView/>}/>
              <Route path="micoteca" element={<AddMicoteca/>}/>
              <Route path="fungo" element={<AddFungo/>}/>
              <Route path="extrato" element={<AddExtrato/>}/>
            </Route>
            <Route path="backups" element={<BackupView/>}/>
            <Route path="edit" element={<EditView/>}/>
            <Route path="team" element={<TeamView/>}/>
          </Route>
        </Route>
        <Route path="login" element={<LoginView/>}/>
        <Route path="signup" element={<SignupView/>}/>
        <Route path="*" element={<Home/>}/>
    </Routes>
  )
}

export function AdminRouter() {
  return(
    <Routes>
        <Route element={<ProtectRoutes/>}>
          <Route index element={<DashView/>}/>
          <Route path="search" element={<AdminSearchView/>}/>
          <Route path="add">
            <Route index element={<AddView/>}/>
            <Route path="micoteca" element={<AddMicoteca/>}/>
            <Route path="fungo" element={<AddFungo/>}/>
            <Route path="extrato" element={<AddExtrato/>}/>
          </Route>
          <Route path="backups" element={<BackupView/>}/>
          <Route path="edit" element={<EditView/>}/>
          <Route path="team" element={<TeamView/>}/>
        </Route>
    </Routes>
  )
}

function ProtectRoutes() {
    
    const { cookies, validate } = useAuth();
    const [auth, setAuth] = useState(false);
    const [validateDone, setValidateDone] = useState(false);

    useEffect(() => {

      const check_auth = async() => {
        if (cookies) {
          let auth = await validate(cookies.token)
          if (auth) {
            setAuth(true);
          }
          setValidateDone(true)
        } else {
          setValidateDone(true)
        }
      }
      
      check_auth();
      console.log(auth)

    }, [auth, cookies, validate])

    if (!validateDone) return <div />;
    
    return (
      auth ? <Outlet /> : <Navigate to="/login" exact/>
    ) 
};