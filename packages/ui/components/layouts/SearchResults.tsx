'use client'
import React, { useState } from "react";

import { ListingCard } from "../SearchResults/Listing/ListingCard";

type Props = {
    promise: ListingData[];
}

function SearchResults({ promise }: Props) {
    const results = promise
    const [isMap, setIsMap] = useState(true);
    return (
        <div className="mx-auto xl:container">
            <div className="w-full h-10 p-2 bg-gray-100">
                Map Toggle:
                <input
                    type="checkbox"
                    className="ml-2 toggle toggle-success"
                    checked={isMap}
                    onClick={(e) => setIsMap(!isMap)}
                />
            </div>
            <div
                className={`flex bg-blue-100 p-2`}
            >
                <div
                    className={`w-full sm:min-w-[639px] sm:max-w-[900px] `}
                >

                    {/* {results.map(item => (
                    <ListingCard key={item.id} {...item} />
                ))} */}

                    <ListingCard data={results[0]} alt={results[0].title_img_alt} />
                </div>
                <div className={`${isMap ? 'sm:flex-1' : 'hidden'} bg-pink-300 md:inline-block`}>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;