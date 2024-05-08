import cookiestack from '../../assets/images/stackofcookiesplaceholder.png';
import './Hero.scss'
import flour from '../../assets/images/flour.png';
import { HeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <section className='hero'>
            <div className='hero__top'>
                <div className='hero__top--left'>
                    <p className='page-title'>
                        Chaia's Cookies
                    </p>
                    <p className='page-subtitle'>
                        The Perfect Chocolate <br></br> Chip Cookie.
                    </p>
                    <p className='hero__description--info'>
                        Made with love <HeartFill className='hero__description--info--heart' />
                    </p>
                    <Link to='/about' className='tablet-learn-more'>
                        <button className='tablet-learn-more__button normal'>
                            More About Chaia's Cookies
                        </button>
                    </Link>
                </div>
                <img className='hero__cookies' src={cookiestack} />
            </div>
            <Link to='/about' className='learn-more'>
                <button className='learn-more__button normal'>
                    More About Chaia's Cookies
                </button>
            </Link>
        </section>
    )
}

export default Hero