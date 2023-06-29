import Image, { ImageProps, } from 'next/image';
import { HeartIcon, RedHeartIcon } from '../../../..';

type SourceProps = {
    data: ImageSet[],
    alt?: string,
    isHearted?: boolean
    onHeartClick?: (param: boolean) => void | undefined
}


function ListingImages({ data, alt, isHearted = false, onHeartClick = () => { } }: SourceProps) {
    let style = data.length < 3 ? `grid-cols-${data.length} grid-rows-${data.length}` : 'sm:grid-cols-2 sm:grid-rows-3 grid-rows-2 grid-cols-3';
    return (
        <div className="w-full h-64 sm:h-full bg-slate-100 sm:w-[36%] min-w-[250px] relative">
            <div className={`grid w-full h-full gap-[1px] ${style}`}>
                {data.map((image, idx) => {
                    const lastIndex = idx === data.length - 1;
                    const firstImage = data.length < 3 ? 'sm:col-span-2 sm:row-span-1 row-span-2' : idx == 0 ? 'sm:row-span-2 sm:col-span-2 row-span-3 col-span-2' : 'sm:col-span-1 row-span-1';
                    return (
                        <div key={image.id} className={`relative ${firstImage}`}>
                            <Image
                                priority
                                src={idx == 0 ? image.thumbnails?.[1].url : image.thumbnails?.[0].url}
                                alt={alt || ''}
                                fill
                                sizes='(max-width: 640px) 100vw,(min-width: 768px) 50vw'
                                className='object-cover'
                            />
                            {lastIndex && idx > 1 && (
                                <div className='absolute w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center hover:bg-[rgba(0,0,0,0.6)] transition-color duration-300 hover:cursor-pointer'>
                                    <p className='font-bold text-white'>Show All ({data.length})</p>
                                </div>
                            )}
                        </div>
                    )
                })}
                <div className='w-6 h-6 absolute bottom-0 left-3 sm:top-3 sm:right-3 sm:left-[unset] sm:bottom-[unset] hover:cursor-pointer hover:scale-110 transition-transform duration-300'>
                    <label className="swap">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox"
                        // checked={isHearted} 
                        // onChange={() => onHeartClick(!isHearted)} 
                        />
                        <HeartIcon className="w-6 h-6 fill-current swap-off" />
                        <RedHeartIcon className="w-6 h-6 fill-current swap-on" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default ListingImages