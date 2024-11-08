import React, {FC} from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import LandingImage from "./landing.png";
import CustomContainer from "@/components/custom-container";
import {CustomLink} from "@/components/navigation/custom-menu-link";
import {ArrowRight} from "lucide-react";

function HomeCustomCarousel() {
    return (
        <div className={"w-full py-8"}>
            <CustomContainer>
            <Carousel
                opts={{loop: true}}
            >
                <CarouselContent>

                    <CarouselItem className={"w-full min-h-[60vh] md:min-h-[90vh] xl:min-h-[60vh] pl-4"}>
                        <SlideTemplate/>
                    </CarouselItem>

                </CarouselContent>

                <CarouselPrevious className={"hidden"}/>
                <CarouselNext className={"hidden"}/>

            </Carousel>
            </CustomContainer>
        </div>
    );
}

export default HomeCustomCarousel;

const SlideTemplate: FC = () => {
    return (
        <div
            className={"w-full rounded-lg overflow-hidden flex flex-col-reverse gap-4 md:grid grid-cols-1 sm:grid-cols-2"}>
            <div className={"w-full flex flex-col justify-center gap-6"}>
                <div className={"text-3xl md:text-6xl font-bold"}>Best <span className={"text-primary"}>Cleaning</span>
                    <br/>service
                    in town
                </div>
                <p className={"font-medium text-lg"}>We provide performing cleaning task using the least amount of time, energy and money.</p>
                <div className={"w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"}>
                    <CustomLink href={"/contacts"}>
                    <Button variant={"default"} size={"lg"} className={"w-full font-bold "}>Get a quote </Button>
                    </CustomLink>

                    <CustomLink href={"/about"}>
                        <Button variant={"outline"} size={"lg"} className={"w-full font-bold "}>Learn more <ArrowRight/></Button>
                    </CustomLink>
                </div>
            </div>
            <Image
                src={LandingImage}
                alt={'slide 1'}
                className={'w-full h-[30vh] md:h-[60vh] object-center object-contain'}
                width={500}
                height={500}
            />
        </div>
    )
}