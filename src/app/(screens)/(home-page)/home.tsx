import React from 'react';
import CustomContainer from "@/components/custom-container";
import CustomCarousel from "@/app/(screens)/(home-page)/custom-carousel";
import HomePageServicesView from "@/app/(screens)/services/components/home-page-services-view";

const Home = () => {
    return (
        <CustomContainer>
            <div className={"w-full space-y-6"}>
                <CustomCarousel/>
                <HomePageServicesView/>
            </div>
        </CustomContainer>
    );
};

export default Home;