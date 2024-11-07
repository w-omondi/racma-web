"use client";

import CustomMenuLink, {CustomLink, CustomSheetLink} from "@/components/navigation/custom-menu-link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CustomContainer from "@/components/custom-container";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {useMemo, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {MdOutlineMenu} from "react-icons/md";

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

export default function Navigation() {
    return (
        <div className="w-full">
            <CustomContainer>
                <div className="flex flex-row items-center justify-between py-2">
                    <Logo/>
                    <DesktopNavigation/>
                    <MobileNavigation/>
                </div>
            </CustomContainer>
        </div>
    );
}

export const Logo = () => (
    <Link href={'/'}>
        <Image src={"/logo.png"} width={200} height={200} className={"w-[150px] object-contain"}
               alt={"logo"}/>
    </Link>
)
export const DesktopNavigation = (props: { usage?: "footer" | "header" }) => {
    const style = useMemo(() => {
        if (props.usage === "footer") {
            return ''
        }
        return 'hidden md:block'
    }, [props.usage])

    return (
        <NavigationMenu className={style}>
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
    )
}
export const FooterNavigation = () => {
    return (
        <div className="w-full flex flex-row items-center justify-center gap-3">
            {services.map((menuItem) => {
                return (
                    <CustomLink key={menuItem.name} href={menuItem.link}>
                        {menuItem.name}
                    </CustomLink>
                );
            })}
        </div>
    )
}
export const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    const onOpenChangeHandler = (open: boolean) => {
        setOpen(open);
    }
    const onCloseSheet = () => setOpen(!open);
    return (
        <Sheet open={open} onOpenChange={onOpenChangeHandler}>

            <SheetTrigger className={"md:hidden"}>
                <MdOutlineMenu size={40}/>
            </SheetTrigger>

            <SheetContent className="w-full sm:w-[540px]">

                <SheetHeader className={"w-full flex justify-start"}>
                    <SheetTitle className={"w-full text-start p-2"}>Menu</SheetTitle>
                </SheetHeader>

                <div className={"w-full flex flex-col"}>

                    {services.map((menuItem) => {

                        if (menuItem.sub.length === 0) {
                            return (
                                <CustomSheetLink
                                    key={menuItem.name}
                                    onClick={onCloseSheet}
                                    href={menuItem.link}
                                >
                                    {menuItem.name}
                                </CustomSheetLink>

                            );
                        }

                        return (
                            <div key={menuItem.name} className={"w-full pl-4"}>

                                <Button className="capitalize w-full text-left">
                                    {menuItem.name}
                                </Button>

                                <div className="flex flex-col pl-4">
                                    {menuItem.sub.map((item) => (
                                        <CustomSheetLink href={item.link} key={item.name} onClick={onCloseSheet}>
                                            {item.name}
                                        </CustomSheetLink>

                                    ))}
                                </div>

                            </div>
                        );

                    })}

                </div>

            </SheetContent>

        </Sheet>
    )
}
