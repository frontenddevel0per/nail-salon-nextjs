import Image from 'next/image';

import gallery1 from '../../resources/img/gallery1.png';
import gallery2 from '../../resources/img/gallery2.png';
import gallery3 from '../../resources/img/gallery3.png';
import gallery4 from '../../resources/img/gallery4.png';
import gallery5 from '../../resources/img/gallery5.png';
import gallery6 from '../../resources/img/gallery6.png';
import gallery7 from '../../resources/img/gallery7.png';
import gallery8 from '../../resources/img/gallery8.png';

const Gallery = () => {
    // const [images, setImages] = useState(0);
    // let imagesArr = [];

    // imagesArr = DB.map(item => <Image src={item.src} alt={item.alt} />)

    return (
        <div className="gallery" id="gallery">
            <div className="gallery__collage">
                {/* {imagesArr} */}
                <Image src={gallery1} alt="gallery1" />
                <Image src={gallery2} alt="gallery2" />
                <Image src={gallery3} alt="gallery3" />
                <Image src={gallery4} alt="gallery4" />
                <Image src={gallery5} alt="gallery5" />
                <Image src={gallery6} alt="gallery6" />
                <Image src={gallery7} alt="gallery7" />
                <Image src={gallery8} alt="gallery8" />
            </div>
            <button>Показать ещё</button>
        </div>
    )
}

export default Gallery;