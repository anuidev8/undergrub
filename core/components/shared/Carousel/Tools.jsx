import React from 'react'
export const CustomDot = ({ carouselItems, onClick, dotInactiveColor = "bg-white", className, ...rest }) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;

    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <button
            className={`w-2 h-2 rounded-circle mr-2 text-xs  ${active ? "text-primary bg-primary" : `text-white ${dotInactiveColor}`} ${className}`}
            onClick={() => onClick()}
        >
            {React.Children.toArray(carouselItems)[index]}
        </button>
    );
};




export const CustomRightArrow = ({ onClick, className, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className={` p-1 rounded text-white absolute right-2 ${className} `} onClick={() => onClick()}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1.4em" width="1.4em"><path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd" /><path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd" /></svg>
    </button>;
};

export const CustomLeftArrow = ({ onClick, className, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className={` p-1 rounded text-white absolute left-2 ${className} `} onClick={() => onClick()}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1.4em" width="1.4em"><path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd" /></svg>
    </button>
};

export const responsive = (desktop = { items: 6 }, superLargeDesktop = { items: 6 }) => {

    const config = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: superLargeDesktop.items,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: desktop.items,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },

    }
    return config






}