import React from 'react';
import Slider from 'react-slick';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Footer />
    </div>
  );
};

export default MainPage;
