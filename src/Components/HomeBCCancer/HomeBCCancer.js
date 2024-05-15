// import Home from '../../pages/Home/Home';
// import './HomeEmilios.scss';
// import eflogo from '../../assets/images/eflogo.png';
import BCCancer from '../../assets/images/BC-Cancer-logo.png';
// import { Link } from 'react-router-dom';

function HomeBCCancer() {

    return (
        <section className='ef'>
            <div className='ef__top'>
                <div className='ef__description'>
                    <p className='ef__description--title'>
                        Support the BC Cancer Foundation!
                    </p>
                    <p className='ef__description--text'>
                        At Chaia's Cookies, our commitment to giving back extends beyond baking delicious treats. We believe in the power of community and supporting causes that are close to our hearts. The decision to donate a portion of our proceeds to the BC Cancer Foundation is deeply personal to us. Like many, we've been touched by the impact of cancer on our lives and those of our loved ones. By contributing to the BC Cancer Foundation, we're taking a proactive step towards funding vital research, treatment, and support services for cancer patients and their families. Every purchase you make from Chaia's Cookies not only satisfies your sweet tooth but also makes a meaningful difference in the fight against cancer. Together, we can create a sweeter, healthier future for all.
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