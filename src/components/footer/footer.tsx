import React from 'react';
import CustomContainer from "@/components/custom-container";
import {FooterNavigation, Logo} from "@/components/navigation/navigation";
import {BsLinkedin, BsTwitterX} from "react-icons/bs";
import {MdOutlineFacebook} from "react-icons/md";


export default function Footer() {
    return (
        <div className={"bg-gray-800 w-full space-y-4 flex justify-center items-center text-white min-h-[200px]"}>
            <CustomContainer>
                <div className={"bg-gray-800 w-full grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4 py-4 items-center justify-center"}>
                    <FooterNavigation/>
                    <FooterLogo/>
                    <SocialMediaIcons/>
                </div>
            </CustomContainer>
        </div>
    );
}


const FooterLogo = () => (
    <div className={"w-full flex justify-center items-center"}>
        <Logo/>
    </div>
)
export const SocialMediaIcons = () => {
    return (
        <div className={"bg-gray-800 w-full flex flex-row items-center justify-center text-2xl gap-4"}>
            <BsTwitterX/>
            <MdOutlineFacebook/>
            <BsLinkedin/>
        </div>
    )
}