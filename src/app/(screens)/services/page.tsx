import servicesData from './services.json'
import ServiceCard from "@/components/services-card";
import {Service} from "@/app/(screens)/services/interface";
import CustomContainer from "@/components/custom-container";

export default function Services() {
    return (
        <CustomContainer>
            {/* Service Cards */}
            {servicesData.map((service: Service, index) => (
                <ServiceCard
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                />
            ))}

        </CustomContainer>
    );
}
