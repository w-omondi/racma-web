"use client";

import CustomMenuLink, {CustomLink} from "@/components/navigation/custom-menu-link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CustomContainer from "@/components/custom-container";
import {CiMenuFries} from "react-icons/ci";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {useState} from "react";

type Service = {
    name: string;
    link: string;
    sub: Service[];
};

const services: Service[] = [
    { name: "home", link: "/", sub: [] },
    { name: "about", link: "/about", sub: [] },
    {name: "services", link: "/services", sub: []},
    {name: "contacts", link: "/contacts", sub: []},
];

function Navigation() {
    const [open, setOpen] = useState(false);
    const onOpenChangeHandler = (open: boolean) => {
        setOpen(open);
    }
    const onCloseSheet = () => setOpen(!open);

    return (
        <div className="w-full">
            <CustomContainer>
                <div className="flex flex-row items-center justify-between py-4">
                    <div className="font-extrabold text-2xl text-primary">RACMA</div>
                    <NavigationMenu className={`hidden md:block`}>
                        <NavigationMenuList>
                            {services.map((menuItem) => {

                                if (menuItem.sub.length === 0) {
                                    return (
                                        <CustomMenuLink key={menuItem.name} href={menuItem.link}>
                                            {menuItem.name}
                                        </CustomMenuLink>
                                    );
                                }

                                return (
                                    <NavigationMenuItem key={menuItem.name}>
                                        <NavigationMenuTrigger className="uppercase">
                                            {menuItem.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="p-2 list-none">
                                            {menuItem.sub.map((item) => (
                                                <CustomMenuLink key={item.name} href={item.link}>
                                                    {item.name}
                                                </CustomMenuLink>
                                            ))}
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Sheet open={open} onOpenChange={onOpenChangeHandler}>

                        <SheetTrigger className={"md:hidden"}>
                            <CiMenuFries size={26}/>
                        </SheetTrigger>

                        <SheetContent className="w-full sm:w-[540px]">

                            <SheetHeader className={"w-full flex justify-start"}>
                                <SheetTitle className={"w-full text-start p-2"}>Menu</SheetTitle>
                            </SheetHeader>

                            <div className={"w-full flex flex-col"}>

                                {services.map((menuItem) => {

                                    if (menuItem.sub.length === 0) {
                                        return (
                                            <CustomLink
                                                key={menuItem.name}
                                                onClick={onCloseSheet}
                                                href={menuItem.link}
                                            >
                                                {menuItem.name}
                                            </CustomLink>

                                        );
                                    }

                                    return (
                                        <div key={menuItem.name} className={"w-full pl-4"}>

                                            <Button className="capitalize w-full text-left">
                                                {menuItem.name}
                                            </Button>

                                            <div className="flex flex-col pl-4">
                                                {menuItem.sub.map((item) => (
                                                    <CustomLink href={item.link} key={item.name} onClick={onCloseSheet}>
                                                        {item.name}
                                                    </CustomLink>

                                                ))}
                                            </div>

                                        </div>
                                    );

                                })}

                            </div>

                        </SheetContent>

                    </Sheet>
                </div>
            </CustomContainer>
        </div>
    );
}

export default Navigation;
