import cookiestack from '../../assets/images/stackofcookiesplaceholder.png';
import './Hero.scss'
import flour from '../../assets/images/flour.png';

function Hero () {

    return (
        <section className='hero'>
            {/* <img src={flour} alt='flour' className='hero__flour'/> */}

            <p className='hero__title'>
                Chaia's Cookies
            </p>
            <p className='hero__description'>
                The Perfect Chocolate <br></br> Chip Cookie.
            </p>
            <p className='hero__description--info'>
                Made with love - and brown butter... same thing. 
            </p>
            <img className='hero__cookies' src={cookiestack} />

            <button className='hero__button'>
                Learn More
            </button>
        </section>
    )
}

export default Hero