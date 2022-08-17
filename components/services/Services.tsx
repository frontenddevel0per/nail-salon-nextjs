import Image from 'next/image';
import { FC } from 'react';

import left_img from '../../resources/img/services-left.png';
import center_img from'../../resources/img/services-center.png';
import right_img from '../../resources/img/services-right.png';

type ServicesProps = {
    setModal: (isOpened: boolean) => void;
}

const Services: FC<ServicesProps> = ({setModal}) => (
    <div className="services" id="services">
        <div className="services__header">
            <div className="services__header-part">
                <Image src={left_img} alt="leftimg" />
                <p>Crazy маникюр</p>
            </div>
            <div className="services__header-part">
                <Image src={center_img} alt="leftimg" />
                <p>Кайфовый персонал</p>
            </div>
            <div className="services__header-part">
                <Image src={right_img} alt="leftimg" />
                <p>Уютная атмосфера</p>
            </div>
        </div>
        <div className="services__main">
            <h1>Услуги</h1>
            <div className="services__main-container">
                <div className="services__main-container-part">
                    <h2>Маникюр</h2>
                    <div className="services__main-container-part-prices">
                        <div className="services__main-container-part-prices-item">
                            <h3>Маникюр с покрытием</h3>
                            <p>однотонное покрытие</p>
                            <h3>2000 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Маникюр и наращивание ногтей</h3>
                            <p>любой дизайн</p>
                            <h3>4000 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Маникюр + наращивание</h3>
                            <p>экстра длина</p>
                            <h3>6000 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Маникюр</h3>
                            <p>покрытие с любым дизайном</p>
                            <h3>3000 ₽</h3>
                        </div>
                    </div>
                    <button onClick={() => setModal(true)}>Записаться</button>
                </div>
                <div className="services__main-container-part">
                    <h2>Педикюр</h2>
                    <div className="services__main-container-part-prices">
                        <div className="services__main-container-part-prices-item">
                            <h3>Педикюр</h3>
                            <p>с любым дизайном</p>
                            <h3>3000 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Ремонт</h3>
                            <h3>300 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Снятие</h3>
                            <h3>500 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <p>*Снятие с последующим покрытием - бесплатно</p>
                        </div>
                    </div>
                    <button onClick={() => setModal(true)}>Записаться</button>
                </div>
                <div className="services__main-container-part">
                    <h2>Брови</h2>
                    <div className="services__main-container-part-prices">
                        <div className="services__main-container-part-prices-item">
                            <h3>Коррекция и окрашивание</h3>
                            <h3>1000 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Коррекция + Д/У</h3>
                            <h3>1200 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Окрашивание Д/У</h3>
                            <h3>1300 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Осветление и окрашивание</h3>
                            <h3>1000 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Осветление и окрашивание</h3>
                            <h3>1000 ₽</h3>
                        </div>
                        <div className="services__main-container-part-prices-item">
                            <h3>Осветление, окрашивание коррекция</h3>
                            <h3>1400 ₽</h3>
                        </div>
                    </div>
                    <button onClick={() => setModal(true)}>Записаться</button>
                </div>
            </div>
        </div>
    </div>
)
export default Services;