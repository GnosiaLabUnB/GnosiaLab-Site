import Home from './views/Home';
import About from './views/About';
import Search from './views/Search';
import Publications from './views/Publications';
import AdminDash from './views/AdminDash';

import AddView from './views/admin/AddView';
import AdminSearchView from './views/admin/SearchView'

import {
  Routes,
  Route
} from "react-router-dom";

import BackupView from './views/admin/BackupView';
import EditView from './views/admin/EditView';
import TeamView from './views/admin/TeamView';
import DashView from './views/admin/DashView';
import AddFungo from './views/admin/AddFungo';
import AddExtrato from './views/admin/AddExtrato';
import AddMicoteca from './views/admin/AddMicoteca';


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

