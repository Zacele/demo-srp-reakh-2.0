import Image, { ImageProps, } from 'next/image';

type Props = ImageSource & {
    alt?: string
}

function ListingImage({ url, width, height, alt }: Props) {
    return (
        <div className="relative w-full bg-red-600 w-100 h-60">
            <Image
                src={url}
                alt={alt || ''}
                fill
                sizes='(max-width: 640px) 100vw,(min-width: 768px) 50vw'
                className='object-cover'
            />
        </div>
    )
}

export default ListingImage