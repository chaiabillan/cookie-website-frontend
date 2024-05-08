import './Footer.scss';
import logo from '../../assets/images/Designer-removebg-preview.png';
import cookies from '../../assets/images/stackofcookiescropped.png';

function Footer() {

    return (
        <section className='footer'>
            <div className='footer__left'>
                <div className='footer__contact'>
                    <p className='footer__contact--title'>
                        Contact
                    </p>
                    <p className='footer__contact--email'>
                        email:
                        <a href='mailto: info@chaiascookies.com' className='footer__contact--email--link'>
                            info@chaiascookies.com
                        </a>
                    </p>
                    <p className='footer__contact--instagram'>
                        instagram:
                        <a href='https://www.instagram.com/chaiascookies/' className='footer__contact--instagram--link'>
                            @chaiascookies
                        </a>
                    </p>
                </div>
                <img src={logo} alt='logo' className='footer__image--logo' />
                <div className='footer__buy'>
                    <p className='footer__buy--title'>
                        Buy In Store
                    </p>
                    <a href='https://maps.app.goo.gl/zfHnancwSrHGrvBZ8' className='footer__buy--address'>
                        <p className='footer__buy--address--link'>
                            Emilio Finatti Pizzeria
                        </p>
                        <p className='footer__buy--address--link'>
                            2818 St. Johns Street
                        </p>
                        <p className='footer__buy--address--link'>
                            V3H 2C1
                        </p>
                        <p className='footer__buy--address--link'>
                            Port Moody, BC
                        </p>
                    </a>
                </div>
            </div>
            <div className='footer__image'>
            <img src={cookies} alt='cookies' className='footer__image--cookies' />

            </div>
        </section>
    )
}

export default Footer