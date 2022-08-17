import Image from 'next/image';
import logo from '../../resources/img/logo.png';
import { FC } from 'react';

const Preloader: FC = () => (
    <div className="preloader" id="preloader">
        <div className="preloader__img">
            <Image src={logo} alt="logo" priority/>
        </div>
    </div>
)

export default Preloader;