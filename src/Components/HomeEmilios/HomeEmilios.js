import Home from '../../pages/Home/Home';
import './HomeEmilios.scss';
import eflogo from '../../assets/images/eflogo.png';
import { Link } from 'react-router-dom';

function HomeEmilios() {

    return (
        <>
            <section className='ef'>
                <div className='ef__top'>
                    <img src={eflogo} alt='eflogo' className='ef__logo' />
                    <div className='ef__description'>
                        <p className='ef__description--title'>
                            Come and find us at Emilio Finatti Pizzeria in Port Moody!
                        </p>
                        <p className='ef__description--text'>
                            Make the perfect pairing with some delicious pizza and gooey chocolate chip cookies.
                        </p>
                    </div>
                </div>
                <Link to='/buy' className='learn-more'>
                    <button className='learn-more__button normal'>
                        Learn More
                    </button>
                </Link>
            </section>
        </>
    )
}

export default HomeEmilios