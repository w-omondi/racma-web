import React, {FC} from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import Slide1Image from '../app/(screens)/(home-page)/slide1.jpg'
import {Button} from "@/components/ui/button";

function CustomCarousel() {
    return (
        <div className={"w-full"}>
            <Carousel
            opts={{
                loop: true,
            }}
            >
                <CarouselContent>

                    <CarouselItem className={"w-full flex justify-center items-center pl-4"}>
                        <SlideTemplate/>
                    </CarouselItem>

                </CarouselContent>

                <CarouselPrevious className={"hidden"}/>
                <CarouselNext className={"hidden"}/>

            </Carousel>
        </div>
    );
}

export default CustomCarousel;

const SlideTemplate: FC = () => {
    return (
        <div className={"w-full h-[30vh] md:h-[60vh] rounded-lg overflow-hidden grid grid-cols-2 items-center "}>
            <div className={"w-full flex flex-col justify-center gap-6"}>
                <div className={"text-6xl font-bold"}>Best <span className={"text-primary"}>Cleaning</span> <br/>service
                    in town
                </div>
                <div>
                    <Button variant={"default"} size={"lg"}>Get Started</Button>
                </div>
            </div>
            <Image src={Slide1Image} alt={'slide 1'} className={'w-full object-center'}/>
        </div>
    )
}