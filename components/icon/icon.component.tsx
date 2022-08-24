import { FC } from 'react'
import { SOCIALS } from './icon.constant'

type IconProps = {
    name: string,
    size: number
}

const Icon: FC<IconProps> = ({name, size = 50}) => {
    let iconPath: string = "", iconId: string = "", iconUrl: string = "";

    switch (name) {
        case "tg":
            iconPath = SOCIALS.TG.path;
            iconId = SOCIALS.TG.id;
            break;
        case "inst":
            iconPath = SOCIALS.INST.path;
            iconId = SOCIALS.INST.id;
            break;
        case "whatsapp":
            iconPath = SOCIALS.WA.path;
            iconId = SOCIALS.WA.id;
            break;
        case "vk":
            iconPath = SOCIALS.VK.path;
            iconId = SOCIALS.VK.id;
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