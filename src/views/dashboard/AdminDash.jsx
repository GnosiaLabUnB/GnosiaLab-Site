import React from 'react';
import AdminWrapper from 'src/components/dashboard/shared/AdminWrapper';

import { AdminRouter } from 'src/routes';

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
