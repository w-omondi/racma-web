import React from 'react';
import { NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';

interface ICustomMenuLink {
    children: React.ReactNode;
    href: string;
}

function CustomMenuLink(props: ICustomMenuLink) {
    return (
        <NavigationMenuItem className={"uppercase"}>
            <Link href={props.href} legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} uppercase`}>
                    {props.children}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
}

export default CustomMenuLink;