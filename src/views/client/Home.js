import React from 'react';

import HomeCarrousel from '../../components/client/home/HomeCarrousel';
import PageWrapper from '../../components/client/shared/PageWrapper';

class Home extends React.Component {
    render() {
      return (
        <PageWrapper>
          <HomeCarrousel></HomeCarrousel>
        </PageWrapper>
      )
    }
}


export default Home;
