import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import AnimatedList from "@/app/(screens)/(home-page)/animated-list";

function HomeAbout() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="font-bold text-primary">About us</CardTitle>
                <CardTitle className="text-xl font-bold">Professional Cleaning and Related Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/*<p className="text-lg font-medium">Professional Cleaning and Related Services</p>*/}
                <p>
                    Our approach to cleaning involves a thorough, organized process tailored to homes, offices, and
                    commercial properties.
                </p>
                <AnimatedList/>
            </CardContent>
        </Card>
    );
}

export default HomeAbout;