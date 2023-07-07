import React from 'react';

function RunTimeLine({text}) {
    return (
        <div className="runline hidden 2xl:block w-full overflow-hidden py-10 border-t border-b border-whiteline-mapbiz select-none">
            <p className="font-grotesk-light text-6xl whitespace-nowrap animate-marquee-base-mapbiz leading-[5.5rem] text-whitelink-mapbiz">
                {text}
            </p>
        </div>
    );
}

export default RunTimeLine;