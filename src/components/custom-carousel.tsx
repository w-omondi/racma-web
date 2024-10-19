import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

function CustomCarousel() {
    return (
        <div className={"w-full bg-slate-400"}>
            <Carousel>
                <CarouselContent className={"rounded-lg"}>
                    <CarouselItem
                        className={"w-full h-[80vh] flex justify-center items-center bg-primary rounded pl-4"}>.1.</CarouselItem>
                    <CarouselItem
                        className={"w-full h-[80vh] flex justify-center items-center bg-red-200 rounded pl-4"}>.2.</CarouselItem>
                    <CarouselItem
                        className={"w-full h-[80vh] flex justify-center items-center bg-blue-200 rounded pl-4"}>.3.</CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
}

export default CustomCarousel;