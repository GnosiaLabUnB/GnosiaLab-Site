import Home from './views/client/Home';
import About from './views/client/About';
import Search from './views/client/Search';
import Publications from './views/client/Publications';


import AddView from './views/dashboard/add/AddView';
import AdminSearchView from './views/dashboard/SearchView';
import BackupView from './views/dashboard/BackupView';
import EditView from './views/dashboard/EditView';
import TeamView from './views/dashboard/TeamView';
import DashView from './views/dashboard/DashView';
import AddFungo from './views/dashboard/add/AddFungo';
import AddExtrato from './views/dashboard/add/AddExtrato';
import AddMicoteca from './views/dashboard/add/AddMicoteca';
import LoginView from './views/dashboard/Login';
import AdminDash from './views/dashboard/AdminDash';


import {
  Routes,
  Route
} from "react-router-dom";

export function NavRouter() {
  return(
    <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
        </Route>
        <Route path="/search" element={<Search/>}/>
        <Route path="/publications" element={<Publications/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<AdminDash/>}>
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
        <Route path="login" element={<LoginView/>}/>
        <Route path="*" element={<Home/>}/>
    </Routes>
  )
}

export function AdminRouter() {
  return(
    <Routes>
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
    </Routes>
  )
}

