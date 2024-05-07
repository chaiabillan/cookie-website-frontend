import Hero from '../../Components/Hero/Hero';
import HomeBCCancer from '../../Components/HomeBCCancer/HomeBCCancer';
import HomeEmilios from '../../Components/HomeEmilios/HomeEmilios';
import './Home.scss';

function Home () {

    return (
        <section className='homepage'>
            <Hero />
            <HomeEmilios />
            <HomeBCCancer />

        </section>
    )
}

export default Home