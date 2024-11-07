import {FaRegLightbulb} from "react-icons/fa6";
import {ReactNode} from "react";
import {CheckCircleIcon, HeartIcon} from "lucide-react";

export interface CoreValue {
    label: string;
    description: string;
}

export interface Section<T> {
    title: string;
    content: T[];
    icon: ReactNode;
}


export const sections = [
        {
            title: "Who Are We",
            content: [
                `Racma Cleaning Services is a certified cleaning company specializing in
            professional cleaning for residential, commercial, and industrial spaces. We offer a
            comprehensive array of services, including post-construction cleaning, gardening and
            landscaping, waste disposal, sanitary bin management, pest control, the supply of
            cleaning materials, and detailed car cleaning. Our team consists of highly trained staff,
            utilizing advanced cleaning tools and eco-friendly products to ensure every space is
            meticulously cleaned, sanitized, and well-maintained.`,
                `Our mission is to create cleaner, more hygienic environments that promote comfort and
            well-being for all occupants.`,
            ],
        },

        {
            title: "Why Choose Us",
            content:
                [
                    `By choosing Racma Cleaning Services, you are opting for quality, reliability, and
            customer satisfaction. Our team is highly trained, insured, and committed to using eco-friendly
            products to ensure your space is spotless.`,
                    `We tailor our services to your unique needs, providing a flexible schedule and paying close
            attention to detail, making cleanliness convenient and hassle-free for you.`,
                ],
        }
        ,
    ]
;

export const missionVissions: Section<string>[] = [
    {
        title: "Our Mission",
        content: [
            `Deliver outstanding cleaning services using eco-friendly methods, promoting health and well-being.`,
            `Our team is committed to excellence, client satisfaction, and creating pristine environments.`,
        ],
        icon: <CheckCircleIcon size={40} className="text-green-500"/>
    },
    {
        title: "Our Vision",
        content: [
            `To be the leading provider of eco-friendly cleaning solutions, transforming spaces into healthy environments.`,
            `We commit to sustainability, trust, and ensuring every service reflects our quality and care.`,
        ],
        icon: <FaRegLightbulb size={40} className="text-green-500"/>
    },
]

export const CoreValuesData: Section<CoreValue>[] = [

    {
        title: "Core Values",
        content: [
            {
                label: "Integrity",
                description: "We uphold honesty and transparency in all interactions."
            },
            {
                label: "Sustainability",
                description: "We use eco-friendly products and practices."
            },
            {
                label: "Teamwork",
                description: "We foster collaboration and a supportive environment."
            },
            {
                label: "Reliability",
                description: "We provide dependable, consistent service every time."
            },
            {
                label: "Innovation",
                description: "We embrace the latest technologies and methods."
            },
            {
                label: "Excellence",
                description: "We strive for the highest standards in everything we do."
            },
        ],
        icon: <HeartIcon size={40} className="text-green-500"/>
    },
];


