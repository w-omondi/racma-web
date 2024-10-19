import React from 'react';
import CustomContainer from "@/components/custom-container";
import CustomCarousel from "@/components/custom-carousel";

const Home = () => {
    return (
        <CustomContainer>
            <h1>Home page</h1>
            <CustomCarousel/>
        </CustomContainer>
    );
};

export default Home;