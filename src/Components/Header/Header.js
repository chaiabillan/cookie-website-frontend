import './Header.scss';
import logo from '../../assets/images/Designer-removebg-preview.png';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <section className='header'>
            <Link to='#' className='header__left'>
                Chaia's Cookies
            </Link>
            <div className='header__right'>
                <Link className='header__right--buy'>
                    Buy
                </Link>
                <Link className='header__right--about'>
                    About
                </Link>
                <div className='header__right--auth'>
                    <Link className='header__right--auth--login'>
                        Login
                    </Link>
                    <Link className='header__right--auth--signup'>
                        Sign Up
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Header