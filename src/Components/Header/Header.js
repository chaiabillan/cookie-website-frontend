import './Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons';
import logo from '../../assets/images/Designer-removebg-preview.png';


function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <>
            <header>
                <div className='mobile-header'>
                    <List className='mobile-header__list' onClick={toggleDropdown} />
                    <Link to ='/'><img src={logo} alt='logo'className='header__logo' /></Link>
                </div>
            </header>
            <div className={`menu ${dropdownOpen ? 'open' : ''}`} onClick={closeDropdown}>
                <Link to='#' className='menu__link'>
                    Buy
                </Link>
                <Link to='#' className='menu__link'>
                    About
                </Link>
                <Link to='#' className='menu__link'>
                    Login
                </Link>
                <Link to='#' className='menu__link'>
                    Sign Up
                </Link>
            </div>
            <section className='header'>
                <Link to='/' className='header__left'>
                    <img src={logo} alt='logo' className='header__left--logo'/>
                </Link>
                <div className='header__right'>
                    <Link to='/buy' className='header__right--buy'>
                        Buy
                    </Link>
                    <Link to ='/about' className='header__right--about'>
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
        </>

    )
}

export default Header