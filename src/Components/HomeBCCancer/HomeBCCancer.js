// import Home from '../../pages/Home/Home';
// import './HomeEmilios.scss';
// import eflogo from '../../assets/images/eflogo.png';
import BCCancer from '../../assets/images/BC-Cancer-logo.png';
// import { Link } from 'react-router-dom';
import LoremIpsum from 'react-lorem-ipsum';

function HomeBCCancer() {

    return (
        <section className='ef'>
            <div className='ef__top'>
                <div className='ef__description'>
                    <p className='ef__description--title'>
                        Support the BC Cancer Foundation!
                    </p>
                    <p className='ef__description--text'>
                        {/* Proceeds from each purchase will be donated to the BC Cancer Foundation. */}
                        <LoremIpsum/>
                        {/* akjhf kalsjfhpa fk;jsahf akjsfhalfkjhalskfjh akf klasjhf fkajshflaskfhjas */}
                    </p>
                </div>
                <img src={BCCancer} alt='eflogo' className='ef__logo' />
            </div>
            {/* <Link to='#' className='learn-more'>
                <button className='learn-more__button normal'>
                    Learn More
                </button>
            </Link> */}
        </section>
    )
}

export default HomeBCCancer