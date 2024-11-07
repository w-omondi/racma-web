import servicesData from './services.json'
import CustomContainer from "@/components/custom-container";
import React from "react";
import ServiceCard from "@/app/(screens)/services/components/service-card";
import {HomePageServicesCarousel} from "@/app/(screens)/services/components/home-page-services-view";
import {CustomLink} from "@/components/navigation/custom-menu-link";
import {Button} from "@/components/ui/button";
import {FiPhoneCall} from "react-icons/fi";

export default function Services() {
    return (
        <div className={"w-full"}>
            <TopArticle/>
            <ServicesView/>
        </div>
    );
}

const TopArticle = () => {
    return (
        <CustomContainer>
            <div className={"w-full space-y-8 py-8"}>
                <div className={"w-full flex flex-col justify-center gap-8"}>
                    <div className={"text-3xl md:text-6xl font-bold"}>Transform your <span
                        className={"text-primary"}>space</span>,<br/> now.
                    </div>
                    <p className={"font-medium text-lg"}>Experience professional cleaning services tailored just for
                        you.</p>
                </div>
                <HomePageServicesCarousel removeActions/>
            </div>
        </CustomContainer>
    )
}


const ServicesView = () => {
    return (
        <div className={"w-full bg-primary/5 py-6"}>
            <CustomContainer>
                <div className={"w-full space-y-8 py-8"}>
                    <div className={"w-full flex flex-col justify-center gap-8"}>
                        <div className={"w-full flex flex-row items-center justify-between"}>
                            <div className={"text-primary text-2xl md:text-4xl font-bold"}>Services we offer</div>
                            <CustomLink href={"/contacts"}>
                                <Button variant={"default"} size={"lg"} className={"w-full font-bold "}>Talk to
                                    us <FiPhoneCall size={30} className={"font-bold"}/></Button>
                            </CustomLink>
                        </div>
                        <p className={"font-medium text-lg"}>
                            At Racma, we take pride in delivering a comprehensive range of professional cleaning
                            services tailored to meet every need. Whether it&#39;s your home, office, or commercial
                            space,
                            our
                            skilled team is dedicated to providing top-notch service with attention to detail and a
                            commitment
                            to excellence.
                        </p>
                    </div>
                    <div className={"w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8"}>
                        {servicesData.map(service => <ServiceCard key={service.title} showFeatures {...service}/>)}
                    </div>
                </div>
            </CustomContainer>
        </div>
    )
}