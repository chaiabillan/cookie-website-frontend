import './SignUp.scss';

function SignUp() {

    return (
        <section className='auth'>
            <p className='auth__title'>
                Create an Account
            </p>
            <form className='form'>
                <div className='form__section'>
                    <label className='form__section--label'>
                        First Name:
                    </label>
                    <input className='form__section--input'>
                    </input>
                </div>
                <div className='form__section'>
                    <label className='form__section--label'>
                        Last Name:
                    </label>
                    <input className='form__section--input'>
                    </input>
                </div>
                <div className='form__section'>
                    <label className='form__section--label'>
                        Create a Username:
                    </label>
                    <input className='form__section--input'>
                    </input>
                </div>
                <div className='form__section'>
                    <label className='form__section--label'>
                        Create a Password:
                    </label>
                    <input className='form__section--input'>
                    </input>
                </div>
                <div className='form__section'>
                    <label className='form__section--label'>
                        Confirm Password:
                    </label>
                    <input className='form__section--input'>
                    </input>
                </div>
                <button className='form__button normal'>
                    Create an Account
                </button>
            </form>
        </section>
    )
}

export default SignUp