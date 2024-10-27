import React from 'react';
import {NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {NavigationMenuItem} from '@radix-ui/react-navigation-menu';

interface ICustomMenuLink {
    onClick?: () => void;
    children: React.ReactNode;
    href: string;
}

export default function CustomMenuLink(props: ICustomMenuLink) {
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


export function CustomLink(props: ICustomMenuLink) {
    return (
        <Link href={props.href} onClick={props.onClick}
              className={"capitalize p-2 hover:bg-gray-100 hover:text-primary rounded"}>
            {props.children}
        </Link>
    );
}

