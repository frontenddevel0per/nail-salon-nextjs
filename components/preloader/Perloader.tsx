import Image from '../../node_modules/next/image';
import logo from '../../resources/img/logo.png';

const Preloader = () => (
    <div className="preloader" id="preloader">
        <div className="preloader__img">
            <Image src={logo} alt="logo" priority/>
        </div>
    </div>
)

export default Preloader;