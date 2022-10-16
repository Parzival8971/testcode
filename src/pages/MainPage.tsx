import React from 'react';
import styled from '@emotion/styled';

import Footer from '../components/Footer';
import Header from '../components/Header';

// import LatestMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';
import PopularSection from '../features/movie/popular';
import TopRaterSection from '../features/movie/topRate';
import UpcomingSection from '../features/movie/upcoming';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  padding: 48px 0;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          {/* <LatestMovieSection /> */}
          <NowPlayingSection />
          <PopularSection />
          <TopRaterSection />
          <UpcomingSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default MainPage;
