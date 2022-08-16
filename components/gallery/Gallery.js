import Image from 'next/image';
import { useState, useEffect } from 'react';

import DB from '../../resources/DB/photos.json';

const Gallery = () => {

    const [imagesCount, setImagesCount] = useState(8);
    const [imagesArr, setImagesArr] = useState([]);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < imagesCount; i++) {
            if (i < DB.length) {
                arr.push(<Image key={i} src={DB[i].src} alt={DB[i].alt} width={250} height={250} objectFit="cover"/>)
            }
        }
        setImagesArr(arr);
    }, [imagesCount])


    return (
        <div className="gallery" id="gallery">
            <div className="gallery__collage">
                {imagesArr}
            </div>
            {(imagesCount < DB.length) ? <button onClick={() => setImagesCount(imagesCount+8)}>Показать ещё</button> : null}
        </div>
    )
}

export default Gallery;