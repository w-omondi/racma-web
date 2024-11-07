import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FiArrowUpRight} from "react-icons/fi";
import * as motion from "framer-motion/client";
import {Service} from "@/app/(screens)/services/interface";
import {CustomLink} from "@/components/navigation/custom-menu-link";

interface ServiceCardProps2 extends Service {
    showFeatures?: boolean
    removeActions?: boolean
}

function ServiceCard(props: ServiceCardProps2) {
    const {image, title, description, features, showFeatures,removeActions} = props;
    return (
        <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4}}
            // whileHover={{scale: 1.01}}
            className={"w-full space-y-3"}
        >
            <div
                className={"w-full rounded-2xl overflow-hidden h-[200px] xl:h-[250px] bg-secondary/50"}
            >
                <Image
                    src={image} alt={"card picture"}
                    width={500} height={500}
                    className={"h-[200px] xl:h-[250px] object-cover"}
                />
            </div>
            <div className={"font-bold text-xl"}>{title}</div>
            <div className={"w-full"}>
                {description}
            </div>
            {features && showFeatures && (
                <ul className="list-disc list-inside">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}
            {!removeActions &&
                <CustomLink href={"/contacts"}>
                    <Button variant={"outline"}>Book Now <FiArrowUpRight/></Button>
                </CustomLink>
            }
        </motion.div>
    );
}

export default ServiceCard;