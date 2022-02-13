import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Commercial from '../Commercial/Commercial';
import Companies from '../Companies/Companies';
import Infrastructure from '../Infrastructure/Infrastructure';
import MainHeading from '../MainHeading/MainHeading';
import Residential from '../Residential/Residential';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <MainHeading></MainHeading>
            <Services></Services>
            <Commercial></Commercial>
            <Infrastructure></Infrastructure>
            <Residential></Residential>
            <Works></Works>
            <Companies></Companies>
            <Footer></Footer>
        </div>
    );
};

export default Home;