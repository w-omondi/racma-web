import React from 'react';
import CustomContainer from "@/components/custom-container";

function TopNavigationSection() {
    return (
        <div className={"w-full py-2 bg-primary"}>
            <CustomContainer>
                <div className={"w-full flex flex-row justify-center gap-4"}>
                    <div className={"text-foreground"}>washingndi@gmail.com</div>
                    <div className={"text-foreground"}>0799623291</div>
                </div>

            </CustomContainer>
        </div>
    );
}

export default TopNavigationSection;