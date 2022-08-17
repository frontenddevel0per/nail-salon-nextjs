import { FC } from 'react'
import {TG, INST, WA, VK} from './icon.constant'

type IconProps = {
    name: string,
    size: number
}

const Icon: FC<IconProps> = ({name, size = 50}) => {
    let iconPath: string = "", iconId: string = "", iconUrl: string = "";

    switch (name) {
        case "tg":
            iconPath = TG.path;
            iconId = TG.id;
            iconUrl = TG.url;
            break;
        case "inst":
            iconPath = INST.path;
            iconId = INST.id;
            iconUrl = INST.url;
            break;
        case "whatsapp":
            iconPath = WA.path;
            iconId = WA.id;
            iconUrl = WA.url;
            break;
        case "vk":
            iconPath = VK.path;
            iconId = VK.id;
            iconUrl = VK.url;
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
            <a href={iconUrl}>
                <path d={iconPath} />
            </a>
        </svg>
    )
}

export default Icon;