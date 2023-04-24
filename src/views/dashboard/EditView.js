
import React from 'react';

import HeaderTitle from '../../components/dashboard/shared/HeaderTitle';

import FungusCard from '../../components/shared/FungusCard';
import MycoCard from '../../components/shared/MycoCard';
import PlantCard from '../../components/shared/PlantCard';

class EditView extends React.Component {
    render() {
      return (
        <>
          <HeaderTitle title="Editar"/>
          <PlantCard result={{}}></PlantCard>
          <MycoCard result={{}}></MycoCard>
          <FungusCard result={{}}></FungusCard>
        </>
      )
    }
}


export default EditView;

