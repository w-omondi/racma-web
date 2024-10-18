import React from 'react';
import Navigation from "@/components/navigation/navigation";

interface IPageContainer {
    children: React.ReactNode;
}

//TODO: any styling the major pages
// will be done here
// Global states will be passed here

function PageContainer(props: IPageContainer) {
    return (
        <main className={"bg-green-200 w-[80%] mx-auto"}>
            <Navigation/>
            {props.children}
        </main>
    );
}

export default PageContainer;