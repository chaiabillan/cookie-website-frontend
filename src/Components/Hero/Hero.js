import cookiestack from '../../assets/images/stackofcookiesplaceholder.png';
import './Hero.scss'

function Hero () {

    return (
        <section>
            <img className='hero__cookies' src={cookiestack} />
        </section>
    )
}

export default Hero