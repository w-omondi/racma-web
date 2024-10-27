import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import Slide1Image from '../app/(screens)/(home-page)/slide1.jpg'

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
                        <div className={"w-full h-[30vh] md:h-[60vh] rounded-lg overflow-hidden "}>
                            <Image src={Slide1Image} alt={'slide 1'} className={'h-[30vh] md:h-[60vh] object-center'}/>
                        </div>
                    </CarouselItem>

                </CarouselContent>

                <CarouselPrevious className={"hidden"}/>
                <CarouselNext className={"hidden"}/>

            </Carousel>
        </div>
    );
}

export default CustomCarousel;