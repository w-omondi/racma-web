import React, {FC} from 'react';
import {Separator} from "@/components/ui/separator";
import ServiceCard from "@/app/(screens)/services/components/service-card";
import servicesData from '../services.json'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {FiArrowUpRight} from "react-icons/fi";
import {Button} from "@/components/ui/button";

export default function HomePageServicesView() {
    return (
        <div className={"w-full flex flex-col gap-4 pb-3"}>
            <div className={"w-full grid md:grid-cols-2 gap-4"}>
                <div className="text-xl md:text-5xl font-bold capitalize">we always provide the best service</div>
                <div className="space-y-4 md:p-4">
                    <div className={"font-bold text-xl"}>Services</div>
                    <div>While we can customize your cleaning plan to suit your needs, most clients schedule regular
                        cleaning services:
                    </div>
                </div>
            </div>
            <Separator className={"w-full h-0.5 bg-primary"}/>
            <HomePageServicesCarousel/>
            <SeeAllSections/>
        </div>
    );
}

const SeeAllSections: FC = () => {
    return (
        <div className={"w-full flex justify-center items-center gap-4 p-4"}>
            <Button variant={"outline"} size={"lg"} className={"text-lg font-medium"}>View all
                services <FiArrowUpRight/></Button>
        </div>
    )
}

function HomePageServicesCarousel() {
    return (
        <div className={"w-full"}>
            <Carousel
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {servicesData.map(service => (
                        <CarouselItem className={"sm:basis-1/2 md:basis-1/3 pl-4"} key={service.title}>
                            <ServiceCard {...service}/>
                        </CarouselItem>
                    ))}

                </CarouselContent>

                <CarouselPrevious/>
                <CarouselNext/>

            </Carousel>
        </div>
    );
}

