import servicesData from './services.json'
import CustomContainer from "@/components/custom-container";
import React from "react";
import ServiceCard from "@/app/(screens)/services/components/service-card";

export default function Services() {
    return (
        <CustomContainer>
            <div className={"w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8"}>
                {servicesData.map(service => <ServiceCard key={service.title} showFeatures {...service}/>)}
            </div>
        </CustomContainer>
    );
}
