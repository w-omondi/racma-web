import React from 'react';
import CustomContainer from "@/components/custom-container";
import CustomCarousel from "@/components/custom-carousel";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import AnimatedList from "@/app/(screens)/(home-page)/animated-list";

const Home = () => {
    return (
        <CustomContainer>
            <CustomCarousel/>
            {/* Main Services Introduction */}

            <Card className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]">
                <CardHeader>
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
        </CustomContainer>
    );
};

export default Home;