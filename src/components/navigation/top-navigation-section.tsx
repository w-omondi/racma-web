import React from 'react';
import CustomContainer from "@/components/custom-container";

function TopNavigationSection() {
    return (
        <div className={"w-full py-2 bg-primary hidden md:block"}>
            <CustomContainer>
                <div className={"w-full flex flex-row justify-center gap-4 text-white text-xs md:text-sm"}>
                    <div>Hermes House, Opposite Gill House</div>
                    <div>Nairobi, Kenya</div>
                    <div>Email: racmaservices@gmail.com</div>
                    <div>Phone: +254723572919 +254762006440 +254790282248</div>
                </div>

            </CustomContainer>
        </div>
    );
}

export default TopNavigationSection;