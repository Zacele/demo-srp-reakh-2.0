import DynamicIcon from "./DynamicIcon"
type AmenityIconProps = {
    value: string | number
    type: keyof typeof Amenities
    size?: number
}

enum Amenities {
    Area,
    Bath,
    Bed,
    Car,
    SquareMeter,
}

const AmenityIcon = ({ type, value, size = 6 }: AmenityIconProps) => {
    return (
        <div className='flex items-center gap-1 mr-2'>
            <DynamicIcon name={type} className={`w-${size} h-${size} mb-1`} />
            <p className='font-semibold'>{value}</p>
        </div>
    )
}

export default AmenityIcon
