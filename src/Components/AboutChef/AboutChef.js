import './AboutChef.scss';
import chaia from '../../assets/images/chaia.jpeg';

function AboutChef() {

    return (
        <section className='chef'>
            <p className='page-subtitle chef__title'>
                Meet The Baker - Chaia
            </p>
            <p className='chef__description'>
                <img src={chaia} alt='chaia' className='chef__description--image' />
                Born and raised in the vibrant Lower Mainland of British Columbia, baking has been my passion from an early age. Growing up, I found joy in sharing my creations with friends, family, and anyone who crossed my path. Baking became more than just a hobby; it became my way of expressing love, warmth, and connection with others. 
                <br></br>
                <br></br>
                Now, I am thrilled to embark on a new chapter of my baking journey by partnering with Emilio Finatti Pizzeria and supporting the BC Cancer Foundation. This collaboration is a dream come true, allowing me to share my love for baking with even more people while making a meaningful contribution to a cause close to my heart. With every cookie baked and sold, I hope to spread a little sweetness and support to those in need. Thank you for joining me on this delicious adventure!
            </p>

        </section>
    )
}

export default AboutChef