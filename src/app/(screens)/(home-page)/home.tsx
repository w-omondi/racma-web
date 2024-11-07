import React from 'react';
import HomeCustomCarousel from "@/app/(screens)/(home-page)/home-custom-carousel";
import HomePageServicesView from "@/app/(screens)/services/components/home-page-services-view";

const Home = () => {
    return (
        <div className={"w-full"}>
            <HomeCustomCarousel/>
            <HomePageServicesView/>
        </div>
    );
};

export default Home;