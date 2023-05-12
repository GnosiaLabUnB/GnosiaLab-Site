import React from 'react';

import HomeCarrousel from 'src/components/client/home/HomeCarrousel';
import PageWrapper from 'src/components/client/shared/PageWrapper';

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
