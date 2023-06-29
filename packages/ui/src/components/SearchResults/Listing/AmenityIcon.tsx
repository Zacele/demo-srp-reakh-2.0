import DynamicIcon from "./DynamicIcon"
type AmenityIconProps = {
    value: string | number
    type: keyof typeof Amenities
}

enum Amenities {
    Area,
    Bath,
    Bed,
    Car,
    SquareMeter,
}

const AmenityIcon = (props: AmenityIconProps) => {
    return (
        <div className='flex items-center gap-1 mr-2'>
            <DynamicIcon name={props.type} className="w-6 h-6 mb-1" />
            <p className='font-semibold'>{props?.value}</p>
        </div>
    )
}

export default AmenityIcon
