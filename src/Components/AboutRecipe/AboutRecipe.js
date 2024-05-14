import './AboutRecipe.scss';
import nutfree from '../../assets/images/nutfree.png';
import butter from '../../assets/images/butter.png';
import whitesugar from '../../assets/images/sugar.png';
import brownsugar from '../../assets/images/brownsugar.png';
import vanilla from '../../assets/images/vanilla.png';
import eggs from '../../assets/images/eggs.png';
import flour from '../../assets/images/flourr.png';
import bakingsoda from '../../assets/images/bakingsoda.png';
import salt from '../../assets/images/salt.png';
import chocolate from '../../assets/images/chocolate.png';
import whitechocolate from '../../assets/images/whitechocolate.png';

function AboutRecipe() {
    return (
        <section className='recipe'>
            <p className='page-subtitle about__subtitle recipe__subtitle'>
                The Recipe
            </p>
            <p className='recipe recipe__top'>
                <img src={nutfree} alt='nut free' className='recipe__nutfree' />
                My twist on the classic chocolate chip cookie recipe brings these cookies to the next level. They are made with locally-sourced and fresh ingredients. The brown butter and 2 types of chocolate (white and semi-sweet) are just a few of the things that make these cookies incredible.
            </p>
            <div className='ingredients'>
                <img src={butter} alt='butter' className='ingredients__indiv butter' />
                <img src={whitesugar} alt='white sugar' className='ingredients__indiv white' />
                <img src={brownsugar} alt='brown sugar' className='ingredients__indiv brown' />
                <img src={vanilla} alt='vanilla' className='ingredients__indiv vanilla' />
                <img src={eggs} alt='eggs' className='ingredients__indiv eggs' />
                <img src={flour} alt='flour' className='ingredients__indiv flour' />
                <img src={bakingsoda} alt='baking soda' className='ingredients__indiv bakingsoda' />
                <img src={salt} alt='salt' className='ingredients__indiv salt' />
                <img src={chocolate} alt='chocolate' className='ingredients__indiv choc' />
                <img src={whitechocolate} alt='white chocolate' className='ingredients__indiv whitechoc' />
            </div>
            <p className='recipe recipe__bottom'>
                <strong>Ingredients</strong>: All purpose flour, butter, brown sugar, granulated sugar, white chocolate, semi-sweet chocolate, egg, vanilla, baking soda, salt.
            </p>
        </section>
    )
}

export default AboutRecipe