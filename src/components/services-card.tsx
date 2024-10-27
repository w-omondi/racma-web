import * as motion from "framer-motion/client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Service} from "@/app/(screens)/services/interface";
import Image from "next/image";

type ServiceCardProps = Service;

export default function ServiceCard({image, title, description, features}: ServiceCardProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            whileHover={{scale: 1.05}}
            className="w-full"
        >
            <Card
                className="flex flex-col md:flex-row items-center shadow-lg overflow-hidden bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]">
                <Image
                    src={image}
                    alt={title}
                    className="w-full md:w-1/3 h-full object-cover md:mr-4"
                />
                <CardContent className="space-y-4 p-4 md:w-2/3">
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl font-bold">{title}</CardTitle>
                    </CardHeader>
                    <p>{description}</p>
                    {features && (
                        <ul className="list-disc list-inside">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}

