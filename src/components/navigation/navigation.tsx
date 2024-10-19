import CustomMenuLink from "@/components/navigation/custom-menu-link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import CustomContainer from "@/components/custom-container";


const services = [
    { name: "home", link: "/", sub: [] },
    { name: "about", link: "/about", sub: [] },
    {
        name: "service", link: "/services", sub: [
            { name: "service A", link: "/services" },
            { name: "service A", link: "/services" },
            { name: "service A", link: "/services" },
            { name: "service A", link: "/services" },
            { name: "service A", link: "/services" },
        ]
    },
    { name: "contacts", link: "/contacts", sub: [] }
]


function Navigation() {
    return (
        <div className={"w-full"}>
            <CustomContainer>

                <div className="w-full flex flex-row items-center justify-between py-4">

                    <div className="font-extrabold text-2xl text-primary">RACMA</div>

                    <NavigationMenu>
                        <NavigationMenuList>
                            {services.map((menuItem) => {

                                if (menuItem.sub.length === 0) {
                                    return (
                                        <CustomMenuLink key={menuItem.name}
                                            href={menuItem.link}>{menuItem.name}</CustomMenuLink>
                                    )
                                }

                                return (
                                    <NavigationMenuItem key={menuItem.name}>
                                        <NavigationMenuTrigger className="uppercase">{menuItem.name}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="p-2 list-none">
                                            {menuItem.sub.map(item => <CustomMenuLink
                                                key={item.name}
                                                href={item.link}>{item.name}</CustomMenuLink>)}
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                )
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </CustomContainer>
        </div>
    );
}

export default Navigation;
