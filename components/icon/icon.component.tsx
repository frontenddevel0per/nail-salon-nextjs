import { FC } from 'react'
import { SHAPES } from './icon.constant'

type IconProps = {
    name: string,
    size: number
}

const Icon: FC<IconProps> = ({name, size = 50}) => {
    let iconPath: string = ""
    const iconId: string = `${name}Icon`

    switch (name) {
        case "tg":
            iconPath = SHAPES.TG;
            break;
        case "inst":
            iconPath = SHAPES.INST;
            break;
        case "whatsapp":
            iconPath = SHAPES.WA;
            break;
        case "vk":
            iconPath = SHAPES.VK;
            break;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width={`${size}px`}
            height={`${size}px`}
            id={iconId}
        >
            <path d={iconPath} />
        </svg>
    )
}

export default Icon;