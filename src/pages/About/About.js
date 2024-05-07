import './About.scss';

import AboutRecipe from '../../Components/AboutRecipe/AboutRecipe';
import AboutChef from '../../Components/AboutChef/AboutChef';

function About() {

    return (
        <section className='about'>
            <p className='page-title'>
                About Chaia's Cookies
            </p>
            <AboutRecipe />
            <AboutChef />
        </section>
    )
}

export default About