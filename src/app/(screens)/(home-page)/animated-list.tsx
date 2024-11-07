import * as motion from "framer-motion/client"

export default function AnimatedList() {
    const listItems = [
        { title: "Assessment", description: "Identifying the cleaning needs of the space." },
        { title: "Tools and Supplies", description: "Using specialized equipment and environmentally friendly cleaning products." },
        { title: "Deep Cleaning", description: "Focusing on areas often overlooked, such as carpets, upholstery, and hard-to-reach spots." },
        { title: "Routine Maintenance", description: "Offering scheduled cleanings to maintain consistent cleanliness." },
        { title: "Customization", description: "Adapting our components to meet your specific needs." },
        { title: "Health and Safety", description: "Following strict protocols to ensure a clean, safe, and hygienic environment." },
    ];

    return (
        <ul className="list-disc list-inside space-y-2">
            {listItems.map((item, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <strong>{item.title}:</strong> {item.description}
                </motion.li>
            ))}
        </ul>
    );
}
