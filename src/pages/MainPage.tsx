import React from 'react';
import styled from '@emotion/styled';

import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <LatestMovieSection />
        <NowPlayingSection />
      </Main>
      <Footer />
    </>
  );
};

export default MainPage;
