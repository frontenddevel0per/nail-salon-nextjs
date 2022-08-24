import Image from 'next/image';
import { useState, useEffect, ReactNode, FC } from 'react';
import { PAGINATION_STEP, PLACEHOLDER_BLUR, IMAGE_SIZE } from './gallery.constants';

import DB from '../../resources/DB/photos.json';

const Gallery: FC = () => {
    const [imagesCount, setImagesCount] = useState(PAGINATION_STEP);
    const [imagesArr, setImagesArr] = useState<ReactNode[]>([]);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < imagesCount; i++) {
            if (i < DB.length) {
                arr.push(<Image key={i} src={DB[i].src} alt={DB[i].alt} width={IMAGE_SIZE} height={IMAGE_SIZE} objectFit="cover" placeholder="blur" blurDataURL={PLACEHOLDER_BLUR} />)
            }
        }
        setImagesArr(arr);
    }, [imagesCount])


    return (
        <div className="gallery" id="gallery">
            <div className="gallery__collage">
                {imagesArr}
            </div>
            {(imagesCount < DB.length) ? <button onClick={() => setImagesCount(imagesCount+PAGINATION_STEP)}>Показать ещё</button> : null}
        </div>
    )
}

export default Gallery;