import React from 'react';
import AdminWrapper from '../components/dashboard/AdminWrapper';
import { AdminRouter } from '../routes';

class AdminDash extends React.Component {
    render() {
      return (
        <div>
            <AdminWrapper>
                <AdminRouter/>
            </AdminWrapper>
        </div>
      )
    }
}


export default AdminDash;
