"use client"

import React, {FC} from 'react';
import {Separator} from "@/components/ui/separator";
import ServiceCard from "@/app/(screens)/services/components/service-card";
import servicesData from '../services.json'
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {FiArrowUpRight} from "react-icons/fi";
import {Button} from "@/components/ui/button";
import CustomContainer from "@/components/custom-container";
import {CustomLink} from "@/components/navigation/custom-menu-link";

export default function HomePageServicesView() {
    return (
        <div className={"w-full bg-primary/10 py-6"}>
            <CustomContainer>
                <div className={"w-full flex flex-col gap-4 pb-3"}>
                    <div className={"w-full grid md:grid-cols-2 gap-4"}>
                        <div className="text-xl md:text-5xl font-bold capitalize">we always provide the best service
                        </div>
                <div className="space-y-4 md:p-4">
                    <div className={"font-bold text-xl text-primary"}>Services</div>
                    <div>While we can customize your cleaning plan to suit your needs, most clients schedule regular
                        cleaning services:
                    </div>
                </div>
            </div>
            <Separator className={"w-full h-0.5 bg-primary"}/>
                    <HomePageServicesCarousel removeActions/>
            <SeeAllSections/>
                </div>
            </CustomContainer>
        </div>
    );
}

const SeeAllSections: FC = () => {
    return (
        <div className={"w-full flex justify-center items-center gap-4 p-4"}>
            <CustomLink href={"/services"}>
            <Button variant={"outline"} size={"lg"} className={"text-lg font-medium"}>View all
                services <FiArrowUpRight/>
            </Button>
            </CustomLink>
        </div>
    )
}

export function HomePageServicesCarousel({removeActions}: { removeActions?: boolean }) {
    const [, setApi] = React.useState<CarouselApi>()
    const plugin = React.useRef(
        Autoplay({delay: 3000, stopOnInteraction: true})
    )

    return (
        <div className={"w-full"}>
            <Carousel
                plugins={[plugin.current] as never}
                opts={{loop: true, align: "center"}}
                setApi={setApi}
            >
                <CarouselContent>
                    {servicesData.map(service => (
                        <CarouselItem className={"sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pl-4"} key={service.title}>
                            <ServiceCard {...service} removeActions={removeActions}/>
                        </CarouselItem>
                    ))}

                </CarouselContent>

                <CarouselPrevious className={"hidden md:absolute"}/>
                <CarouselNext className={"hidden md:absolute"}/>

            </Carousel>
        </div>
    );
}

