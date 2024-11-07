import React from 'react';

interface IPageContainer {
    children: React.ReactNode;
}

function CustomContainer(props: IPageContainer) {
    return (
        <div className={"container mx-auto space-y-4 px-4"}>
            {props.children}
        </div>
    );
}

export default CustomContainer;