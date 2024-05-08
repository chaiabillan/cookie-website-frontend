import LoremIpsum from 'react-lorem-ipsum';
import './Buy.scss';

function Buy() {

    return (
        <section className='buy'>
            <p className='page-title'>
                Where to buy
            </p>
            <p className='page-subtitle buy__subtitle'>
                In-Store
            </p>
            <p className='buy__description'>
                Come on down to Emilio Finatti Pizzeria in Port Moody to purchase
                cookies! 
                <br>
                </br> 
                <br></br>
                <strong>
                2818 St. Johns Street
                <br>
                </br>
                V3H 2C1
                <br>
                </br>
                Port Moody, BC
                </strong>

                <LoremIpsum />
            </p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.964437702309!2d-122.85142152330711!3d49.27707107139199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486793db969d8a9%3A0x1139f763070a03ff!2sEmilio%20Finatti%20Pizzeria%20Port%20Moody!5e0!3m2!1sen!2sca!4v1715117805688!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className='buy__map'
            />
            <p className='page-subtitle buy__subtitle buy__subtitle--online'>
                Online
            </p>
            <p className='buy__description'>
                Online ordering will be available soon! Monitor this website to check for updates!
                <LoremIpsum />
            </p>

        </section>
    )
}

export default Buy