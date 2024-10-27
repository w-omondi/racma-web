import React from 'react';
import CustomContainer from "@/components/custom-container";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

function Page() {
    return (
        <CustomContainer>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Who Are We</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 space-y-4">
                    <p>
                        Racma Services Home Care Services is a certified cleaning company specializing in
                        professional cleaning for residential, commercial, and industrial spaces. We offer a
                        comprehensive array of services, including post-construction cleaning, gardening and
                        landscaping, waste disposal, sanitary bin management, pest control, the supply of
                        cleaning materials, and detailed car cleaning. Our team consists of highly trained staff,
                        utilizing advanced cleaning tools and eco-friendly products to ensure every space is
                        meticulously cleaned, sanitized, and well-maintained.
                    </p>
                    <p className="font-medium">Our mission is to create cleaner, more hygienic environments that
                        promote comfort and well-being for all occupants.</p>
                </CardContent>
            </Card>

            <Separator className="my-8"/>

            {/* Our Mission Section */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 space-y-4">
                    <p>
                        Our mission is to deliver outstanding cleaning services that promote health and well-being
                        in
                        both residential and commercial spaces. We are dedicated to using eco-friendly products and
                        methods, ensuring that each environment is not only thoroughly cleaned but also safe.
                    </p>
                    <p>
                        Our professional team is committed to excellence, reliability, and client satisfaction,
                        transforming
                        every space into a pristine environment where people can thrive.
                    </p>
                </CardContent>
            </Card>

            <Separator className="my-8"/>

            {/* Our Vision Section */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 space-y-4">
                    <p>
                        We aim to be the premier provider of environmentally friendly cleaning solutions,
                        transforming
                        living and working spaces into clean, healthy environments that support the well-being of
                        our
                        clients and communities.
                    </p>
                    <p>
                        We are committed to excellence, sustainability, and trust, ensuring every cleaning
                        experience
                        reflects our dedication to quality and care.
                    </p>
                </CardContent>
            </Card>

            {/* Core Values Section */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Core Values</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Integrity:</strong> We uphold honesty and transparency in all our interactions,
                            building trust with our clients and employees.
                        </li>
                        <li>
                            <strong>Quality:</strong> We are dedicated to maintaining high standards in every job we
                            undertake, ensuring attention to detail and cleanliness.
                        </li>
                        <li>
                            <strong>Customer Focus:</strong> Our clients&#39; needs come first, and we customize our
                            services to meet their specific requirements.
                        </li>
                        <li>
                            <strong>Sustainability:</strong> We use eco-friendly products and practices to reduce our
                            environmental footprint.
                        </li>
                        <li>
                            <strong>Teamwork:</strong> We cultivate a supportive work environment where collaboration is
                            key to delivering exceptional services.
                        </li>
                        <li>
                            <strong>Reliability:</strong> We consistently provide dependable services, so our clients
                            can count on us every time.
                        </li>
                        <li>
                            <strong>Innovation:</strong> We embrace the latest technologies and methods to improve
                            efficiency and the quality of our services.
                        </li>
                    </ul>
                    <p className="font-medium">
                        These values are the foundation of our operations and help us build long-lasting relationships
                        with both our clients and our staff.
                    </p>
                </CardContent>
            </Card>

            <Separator className="my-8 bg-[hsl(var(--border))]"/>

            {/* Why Choose Us Section */}
            <Card className="shadow-lg bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Why Choose Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>
                        By choosing Racma Services Home Care Services, you are opting for quality, reliability, and
                        customer satisfaction. Our team is highly trained, insured, and committed to using eco-friendly
                        products to ensure your space is spotless.
                    </p>
                    <p>
                        We tailor our services to your unique needs, providing a flexible schedule and paying close
                        attention to detail, making cleanliness convenient and hassle-free for you.
                    </p>
                </CardContent>
            </Card>

        </CustomContainer>
    );
}

export default Page;