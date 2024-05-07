import cookiestack from '../../assets/images/stackofcookiesplaceholder.png';
import './Hero.scss'
import flour from '../../assets/images/flour.png';
import { HeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <section className='hero'>
            <p className='page-title'>
                Chaia's Cookies
            </p>
            <p className='page-subtitle'>
                The Perfect Chocolate <br></br> Chip Cookie.
            </p>
            <p className='hero__description--info'>
                Made with love <HeartFill className='hero__description--info--heart' />
            </p>
            <img className='hero__cookies' src={cookiestack} />
            <Link to='/about'>
                <button className='learn-more__button normal'>
                    Learn More
                </button>
            </Link>
        </section>
    )
}

export default Hero