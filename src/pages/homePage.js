import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial';
import CrudeExperience from '../components/CrudeExperience';
import CrudSecurity from '../components/CrudSecurity';
import BrandLove from '../components/BrandsLove';
import WindowPeak from '../components/WindowPeak';
import MobileScroll from '../components/MobileScroll';
import CredStory from '../components/CredStory';
import AppRating from '../components/AppRating';


const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandLove />
      <CrudeExperience />
      <MobileScroll />
      <div className="non-mobile">
       <WindowPeak />
      </div>
      <CrudSecurity />
      <CredStory />
      {/* <AppRating />   */}

    </>
  );
};;

export default Homepage;