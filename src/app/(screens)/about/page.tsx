import React from 'react';
import CustomContainer from "@/components/custom-container";
import {CoreValue, CoreValuesData, missionVisions, sections} from "@/app/(screens)/about/data";

export default function Page() {
    return (
        <div className={"w-full space-y-6 py-6"}>
            <TopArticle/>
            <AboutIntroduction/>
            <MissionAndVision/>
            <CoreValuesSection/>
        </div>
    );
}


const TopArticle = () => {
    return (
        <div className={"w-full"}>
            <CustomContainer>
                <div className={"w-full min-h-[40vh] flex flex-col justify-center items-center space-y-10"}>
                    <div className="text-primary text-xl font-bold">About Us</div>
                    <div className="text-2xl md:text-4xl font-bold">Dedicated to Excellence in Every Clean.</div>
                    <p>We’re here to help make your space sparkle. Let us know how we can meet your cleaning needs!</p>
                </div>
            </CustomContainer>
        </div>
    )
}

const AboutIntroduction = () => {
    return (
        <div className={"w-full"}>
            <CustomContainer>
                <div className={"w-full grid md:grid-cols-2 gap-4"}>
                    {sections.map((section, index) => {
                        return (
                            <div key={index} className="bg-white rounded-lg border p-6 space-y-4">
                                <div className="text-2xl font-bold text-primary">{section.title}</div>
                                <Paragraphs values={section.content}/>
                            </div>
                        )
                    })}
                </div>
            </CustomContainer>
        </div>
    )
}

const MissionAndVision = () => {
    return (
        <div className={"w-full"}>
            <CustomContainer>
                <div className={"w-full grid md:grid-cols-2 gap-4"}>
                    {missionVisions.map((section, index) => {
                        return (
                            <div key={index} className="bg-primary/20 rounded-lg p-6 space-y-4">
                                <div className="flex flex-col items-start space-y-4">
                                    {section.icon}
                                    <div className="text-2xl font-bold text-primary">{section.title}</div>
                                </div>
                                <Paragraphs values={section.content}/>
                            </div>
                        )
                    })}
                </div>
            </CustomContainer>
        </div>
    )
}

const CoreValuesSection = () => {
    return (
        <div className={"w-full"}>
            <CustomContainer>
                <div className={"w-full space-y-4"}>
                    {CoreValuesData.map((section, index) => {
                        return (
                            <div key={index} className="bg-white rounded-lg p-6 border space-y-4">
                                <div className="text-2xl font-bold text-primary">{section.title}</div>
                                <List values={section.content}/>
                            </div>
                        )
                    })}
                </div>
            </CustomContainer>
        </div>
    )
}

const List = (props: { values: CoreValue[] }) => (
    <ul className="space-y-4 mt-4">
        {props.values.map((item, i) => (
            <li key={i} className="flex items-start text-gray-600 space-x-3">
                <div>
                    <strong>{item.label}:</strong>
                    <p>{item.description}</p>
                </div>
            </li>
        ))}
    </ul>
)

const Paragraphs = (props: { values: string[] }) => (
    <div className="text-gray-600">
        {props.values.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
    </div>
)