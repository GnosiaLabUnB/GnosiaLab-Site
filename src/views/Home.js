import React from 'react';
import HomeCarrousel from '../components/home/HomeCarrousel';
import PageWrapper from '../components/shared/PageWrapper';

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
