"use client";

import CustomContainer from "@/components/custom-container";
import ContactForm from "@/components/forms/contact-form";
import {FC, JSX} from "react";
import {MdEmail, MdLocationPin, MdPhone} from "react-icons/md";

export default function ContactPage() {
    return (
        <div className="w-full min-h-[90vh] py-4 space-y-6">
            <TopArticle/>
            <ContactSection/>
        </div>
    );
}

const TopArticle = () => {
    return (
        <div className={"w-full"}>
            <CustomContainer>
                <div className={"w-full min-h-[40vh] flex flex-col justify-center items-center space-y-10"}>
                    <div className="text-primary text-xl font-bold">Contact Us</div>
                    <div className="text-2xl md:text-4xl font-bold">Get in touch with our team.</div>
                    <p>We’re here to help make your space sparkle. Let us know how we can meet your cleaning needs!</p>
                </div>
            </CustomContainer>
        </div>
    )
}

const ContactSection = () => {
    return (
        <div className={"w-full"}>
            <CustomContainer>
                <div className={"w-full mx-auto md:w-3/4 grid grid-cols-1 gap-12 md:grid-cols-2 py-4"}>
                    <AddressSection/>
                    <ContactFormContainer/>
                </div>
            </CustomContainer>
        </div>
    )
}

const ContactFormContainer = () => {
    return (
        <div className={"w-full rounded-l border p-4"}>
            <ContactForm/>
        </div>
    )
}

const AddressSection = () => {
    const address: AddressItem[] = [
        {
            title: "Location",
            icon: <MdLocationPin size={40} className={"text-lg"}/>,
            description: "Hermes House, Opposite Gill House Nairobi,Kenya"
        },
        {title: "Email", icon: <MdEmail size={40}/>, description: "racmaservices@gmail.com"},
        {title: "Phone", icon: <MdPhone size={40}/>, description: "+254723572919 | +254762006440 | +254790282248"},
    ]

    return (
        <div className={"w-full space-y-4"}>
            {address.map(address => (
                <AddressItem
                    key={address.title}
                    icon={address.icon}
                    title={address.title}
                    description={address.description}/>
            ))}
        </div>
    )
}

interface AddressItem {
    icon: JSX.Element;
    title: string;
    description: string;
}

const AddressItem: FC<AddressItem> = (props) => {
    const {icon, title, description} = props;
    return (
        <div className={"w-full flex flex-row items-center gap-8 p-3 bg-primary/10 rounded-lg"}>
            <div className={"text-primary text-lg w-8 h-8"}>{icon}</div>
            <div className={"w-full"}>
                <div className={"text-lg font-bold text-primary"}>{title}</div>
                <p className={"mb-1"}>{description}</p>
            </div>
        </div>
    )
}


