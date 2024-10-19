import React from 'react';

interface IPageContainer {
    children: React.ReactNode;
}

function CustomContainer(props: IPageContainer) {
    return (
        <main className={"w-[80%] mx-auto"}>
            {props.children}
        </main>
    );
}

export default CustomContainer;