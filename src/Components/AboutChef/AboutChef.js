import './AboutChef.scss';
import chaia from '../../assets/images/chaia.jpeg';
import LoremIpsum from 'react-lorem-ipsum';

function AboutChef() {

    return (
        <section className='chef'>
            <p className='page-subtitle chef__title'>
                Meet The Baker - Chaia
            </p>
            <p className='chef__description'>
                <img src={chaia} alt='chaia' className='chef__description--image' />
                I have always loved to bake.
                When i have not been able to
                find the words to express my
                love for people, I go straight
                to the kitchen and bake them something - usually 
                chocolate chip cookies! <LoremIpsum className='chef__description'/>
            </p>
            
        </section>
    )
}

export default AboutChef