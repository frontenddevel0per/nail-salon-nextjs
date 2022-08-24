import { FC } from 'react'
import { SHAPES } from './icon.constant'

type IconProps = {
    name: keyof typeof SHAPES,
    size: number
}

const Icon: FC<IconProps> = ({name, size = 50}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width={`${size}px`}
            height={`${size}px`}
            id={`${name}Icon`}
        >
            <path d={SHAPES[name]} />
        </svg>
    )
}

export default Icon;