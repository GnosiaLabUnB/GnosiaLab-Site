import React from 'react';
import AdminWrapper from '../../components/dashboard/shared/AdminWrapper';

import { AdminRouter } from '../../routes';

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
