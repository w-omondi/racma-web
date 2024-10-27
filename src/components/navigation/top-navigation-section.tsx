import React from 'react';
import CustomContainer from "@/components/custom-container";

function TopNavigationSection() {
    return (
        <div className={"w-full py-2 bg-primary hidden md:block"}>
            <CustomContainer>
                <div className={"w-full flex flex-row justify-center gap-4 text-white text-xs md:text-sm"}>
                    <div>123 Clean St, Suite 100</div>
                    <div>Nairobi, Kenya</div>
                    <div>Email: info@brightcleaners.com</div>
                    <div>Phone: (123) 456-7890</div>
                </div>

            </CustomContainer>
        </div>
    );
}

export default TopNavigationSection;